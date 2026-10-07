import glob, os
from PIL import Image

# Let's check image dimensions and inspect if any image looks like a profile/bio or contains high contrast text
files = sorted(glob.glob(r'assets\ad_refs\*.png'))
for i, f in enumerate(files):
    name = os.path.basename(f)
    with Image.open(f) as img:
        print(f"{i+1:02d}: {name} - size: {img.size}")
