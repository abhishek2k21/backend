import time
import subprocess
import os
from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler

# 1) Ensure working dir is project root (jahaan scripts/ aur src/ hain)
ROOT_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
os.chdir(ROOT_DIR)

# 2) Extensions list: Java, Python, TS/JS files
WATCH_EXTS = (".java", ".py", ".ts", ".tsx", ".js", ".jsx")

# 3) Debug endpoint (Devin backend)
DEBUG_URL = "http://localhost:8080/debug"

class ChangeHandler(FileSystemEventHandler):
    def on_modified(self, event):
        # Sirf file modifications handle karo (ignore dirs)
        if not event.is_directory and event.src_path.endswith(WATCH_EXTS):
            print(f"🔍 Change detected in {event.src_path}")
            print("🏃 Running auto-fix…")
            # 4) Correct path to auto_fix.py in scripts/
            result = subprocess.run(
                ["python3", "scripts/auto_fix.py"],
                capture_output=True,
                text=True
            )
            # 5) Output logs for visibility
            if result.stdout:
                print("➡️", result.stdout)
            if result.stderr:
                print("⚠️", result.stderr)

if __name__ == "__main__":
    print(f"👀 Watching for changes under {ROOT_DIR} … Ctrl+C to stop.")
    observer = Observer()
    observer.schedule(ChangeHandler(), ROOT_DIR, recursive=True)
    observer.start()
    try:
        while True:
            time.sleep(1)
    except KeyboardInterrupt:
        observer.stop()
    observer.join()
