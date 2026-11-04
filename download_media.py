#!/usr/bin/env python3
"""Baixa anexos da Wiki e converte seus links em caminhos locais."""
import json, urllib.request, pathlib, os, time
root=pathlib.Path(__file__).resolve().parent
assets=json.loads((root/"media-manifest.json").read_text(encoding="utf-8"))
success,failed=[],[]
for item in assets:
    out=root/item["filename"]
    out.parent.mkdir(parents=True,exist_ok=True)
    if not out.exists():
        try:
            req=urllib.request.Request(item["url"],headers={"User-Agent":"Mozilla/5.0"})
            with urllib.request.urlopen(req,timeout=45) as response:
                out.write_bytes(response.read())
        except Exception as exc:
            failed.append((item["id"],str(exc)))
            print("FALHOU:",item["name"],exc)
            continue
    success.append(item)
    print("OK:",item["name"],out.relative_to(root))
for md in (root/"wiki").rglob("*.md"):
    content=md.read_text(encoding="utf-8")
    for item in success:
        relative=os.path.relpath(root/item["filename"],start=md.parent).replace(os.sep,"/")
        content=content.replace(item["url"],relative)
    md.write_text(content,encoding="utf-8")
print(f"Baixados: {len(success)} de {len(assets)}; falhas: {len(failed)}.")
