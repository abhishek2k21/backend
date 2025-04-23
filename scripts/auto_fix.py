#!/usr/bin/env python3
import os
import sys
import subprocess
import re
import openai

openai.api_key = os.getenv("OPENAI_API_KEY")
MODEL      = "gpt-4"
MAX_PASSES = 5

def compile_errors():
    """Run your build (which invokes Vite/rollup) and capture stderr."""
    proc = subprocess.run(
        ["npm", "run", "build"],
        capture_output=True,
        text=True
    )
    return proc.returncode, proc.stderr

def parse_errors(stderr: str):
    """
    Parse:
      - TypeScript errors: path.tsx:line:col - error TSxxxx: message
      - Rollup import errors: path.js (line:col): "X" is not exported by "…"
      - Java errors as before
    Returns list of (file_path, error_message).
    """
    errs = []
    for line in stderr.splitlines():

        # 1) TypeScript / TSX errors
        m_ts = re.match(r"(.+\.(ts|tsx)):(\d+):\d+ - error .+: (.+)", line)
        if m_ts:
            errs.append((m_ts.group(1), m_ts.group(4).strip()))
            continue

        # 2) Rollup/Vite import errors
        #    e.g. path/file.js (338:40): "XYZ" is not exported by "..."
        m_roll = re.match(r"^(.+\.(?:js|jsx|ts|tsx)) \(\d+:\d+\): (.+)$", line)
        if m_roll:
            errs.append((m_roll.group(1), m_roll.group(2).strip()))
            continue

        # 3) Java compile errors
        m_jv = re.match(r"(.+\.java):\[(\d+),\d+\] (.+)", line)
        if m_jv:
            errs.append((m_jv.group(1), m_jv.group(3).strip()))
            continue

    print(f"🕵️‍♂️ Parsed {len(errs)} error(s):")
    for p, m in errs:
        print(f"   • {p} → {m}")
    return errs

def fix_file(path: str, err_msg: str) -> str:
    abs_path = os.path.abspath(path)
    with open(abs_path, "r", encoding="utf-8") as f:
        content = f.read()

    prompt = f"""
The following file `{path}` has a build/compile error.

Error message:
{err_msg}

Here is its current content:
{content}


Please return the **complete corrected source code only**, fixing the import or type error.
"""
    resp = openai.ChatCompletion.create(
        model=MODEL,
        messages=[
            {"role":"system","content":"You are an expert developer. Fix only the import/type errors."},
            {"role":"user","content":prompt}
        ],
        temperature=0
    )
    return resp.choices[0].message.content.strip("\n")

def main():
    for attempt in range(1, MAX_PASSES+1):
        code, stderr = compile_errors()
        if code == 0:
            print(f"✅ Pass {attempt}: Build succeeded!")
            sys.exit(0)

        errors = parse_errors(stderr)
        if not errors:
            print("❌ Build failed but couldn't parse errors. Aborting.")
            print(stderr)
            sys.exit(1)

        print(f"🔄 Pass {attempt}: Auto‑fixing {len(errors)} error(s)…")
        for rel_path, msg in errors:
            print(f"  🛠️ Fixing {rel_path}: {msg}")
            patched = fix_file(rel_path, msg)
            with open(rel_path, "w", encoding="utf-8") as f:
                f.write(patched + "\n")
        print("✔️ Patches applied; retrying build…\n")

    print(f"⚠️ Reached {MAX_PASSES} attempts without a clean build.")
    sys.exit(1)

if __name__ == "__main__":
    main()
