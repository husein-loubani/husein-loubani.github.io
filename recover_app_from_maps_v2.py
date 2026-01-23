import json, glob, pathlib, shutil

out = pathlib.Path("recovered_app3")
if out.exists():
    shutil.rmtree(out)
(out / "src").mkdir(parents=True, exist_ok=True)
(out / "public").mkdir(parents=True, exist_ok=True)

def clean(s: str) -> str:
    s = s.replace("\\", "/")
    for pref in ("webpack:///", "webpack://"):
        if s.startswith(pref):
            s = s[len(pref):]
    s = s.lstrip("/")
    if s.startswith("./"):
        s = s[2:]
    return s

written = 0

for mp in glob.glob("static/js/*.map"):
    with open(mp, "r", encoding="utf-8") as f:
        data = json.load(f)

    sources = data.get("sources", [])
    contents = data.get("sourcesContent", [])
    if not sources or not contents:
        continue

    for src, content in zip(sources, contents):
        if content is None:
            continue

        src = clean(src)

        # Skip dependencies
        if src.startswith("../node_modules/") or "node_modules" in src:
            continue
        if src.startswith("../"):
            continue

        # Decide destination
        if src.startswith("public/"):
            rel = src
        elif src.startswith("src/"):
            rel = src
        else:
            # CRA often stores app files relative to src/
            rel = "src/" + src

        rel = rel.replace("..", "__")

        p = out / rel
        p.parent.mkdir(parents=True, exist_ok=True)
        p.write_text(content, encoding="utf-8")
        written += 1

print("Recovered files:", written)
print("Output:", out.resolve())
