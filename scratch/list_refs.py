import os, glob
from PIL import Image

ad_refs = sorted([f for f in glob.glob(r'assets\ad_refs\*.png') if 'logo' not in os.path.basename(f).lower()])
print(f"Total reference screenshots: {len(ad_refs)}")

for i, f in enumerate(ad_refs):
    with Image.open(f) as img:
        print(f"{i+1:02d}: {os.path.basename(f)} - {img.size}")
