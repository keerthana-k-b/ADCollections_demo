import glob, os

files = sorted(glob.glob(r'assets\ad_refs\*.png'))
print('Files count:', len(files))
html = ['<!DOCTYPE html><html><head><meta charset="utf-8"><title>Gallery</title></head><body style="font-family:sans-serif;background:#181818;color:#eee;padding:20px;"><h1>AD Refs (39 images)</h1><div style="display:grid;grid-template-columns:repeat(auto-fill, minmax(280px, 1fr));gap:20px;">']
for i, f in enumerate(files):
    name = os.path.basename(f)
    html.append(f'<div style="background:#282828;padding:12px;border-radius:8px;text-align:center;">'
                f'<div style="font-weight:bold;margin-bottom:8px;color:#f0b254;">#{i+1}: {name}</div>'
                f'<img src="../assets/ad_refs/{name}" style="max-width:100%;height:320px;object-fit:contain;border-radius:4px;background:#111;"/>'
                f'</div>')
html.append('</div></body></html>')

with open(r'scratch\gallery.html', 'w', encoding='utf-8') as out:
    out.write('\n'.join(html))
print('Created scratch\\gallery.html successfully')
