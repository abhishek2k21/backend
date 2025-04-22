#!/usr/bin/env python3
import os
import subprocess
import re
import openai
import sys

# ─── CONFIG ────────────────────────────────────────────────────────
openai.api_key = os.getenv("OPENAI_API_KEY")
MODEL      = "gpt-4"        # or "gpt-3.5-turbo"
MAX_PASSES = 5
# ─────────────────────────────────────────────────────────────────


def compile_errors():
    """Run tsc --noEmit and capture errors."""
    proc = subprocess.run(
        ["npx", "tsc", "--noEmit"],
        capture_output=True,
        text=True
    )
    return proc.returncode, proc.stderr


def parse_ts_errors(stderr: str):
    """
    Parse tsc errors of the form:
      src/foo.ts(12,5): error TSXXXX: message
    Returns a list of (file_path, error_message).
    """
    errs = []
    for line in stderr.splitlines():
        m = re.match(r'(.+\.ts)\(\d+,\d+\):\s+error TS\d+: (.+)', line)
        if m:
            errs.append((m.group(1), m.group(2).strip()))
    return errs


def fix_file(path: str, err_msg: str):
    """Read file, send to OpenAI with error, overwrite with fixed code."""
    # 1. Read the broken file
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()

    # 2. Build the prompt (must be indented under fix_file)
    prompt = f"""
    The following TypeScript file has a type‑check error.
    Error message: "{err_msg}"

    Here is the current content of `{os.path.basename(path)}`:
    ```ts
    {content}
    Please return the full corrected source code only, with the type error fixed. """
   # 3. Call the old‑style ChatCompletion API (now available because we downgraded)
    response = openai.ChatCompletion.create(
        model=MODEL,
        messages=[
            {"role": "system", "content": "You are a TypeScript expert. Fix the type errors."},
            {"role": "user",   "content": prompt}
        ],
        temperature=0
    )

# 4. Overwrite the file
    fixed_code = response.choices[0].message.content
    with open(path, "w", encoding="utf-8") as f:
        f.write(fixed_code)
def main():
    """Loop up to MAX_PASSES: compile → parse → fix → retry."""
    for attempt in range(1, MAX_PASSES + 1):
        code, stderr = compile_errors()
        if code == 0:
            print("✅ Type‑check passed!")
            sys.exit(0)

        errors = parse_ts_errors(stderr)
        if not errors:
            print("⚠️ No parseable errors found. Aborting.")
            print(stderr)
            sys.exit(1)

        print(f"🔄 Pass {attempt}: fixing {len(errors)} errors…")
        for path, msg in errors:
            print(f"  • {path}: {msg}")
            fix_file(path, msg)
        print("✔️ Files patched; retrying type‑check…\n")

    # If we exit the loop without success:
    print(f"❌ Reached {MAX_PASSES} passes without a clean type‑check.")
    sys.exit(1)

if __name__ == "__main__":
    main()