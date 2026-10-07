import os, glob
from PIL import Image, ImageDraw, ImageFont

ad_refs = sorted([f for f in glob.glob(r'assets\ad_refs\*.png') if 'logo' not in os.path.basename(f).lower()])

def create_montage(files, output_path, cols=4):
    target_w = 300
    target_h = 380
    rows = (len(files) + cols - 1) // cols
    montage = Image.new('RGB', (cols * target_w, rows * target_h), (30, 30, 30))
    draw = ImageDraw.Draw(montage)
    
    for idx, f in enumerate(files):
        c = idx % cols
        r = idx // cols
        try:
            im = Image.open(f).convert('RGB')
            im.thumbnail((target_w - 10, target_h - 40), Image.Resampling.LANCZOS)
            x = c * target_w + (target_w - im.width) // 2
            y = r * target_h + 30 + (target_h - 40 - im.height) // 2
            montage.paste(im, (x, y))
            label = f"{idx+1}: {os.path.basename(f)[11:24]}"
            draw.text((c * target_w + 10, r * target_h + 8), label, fill=(255, 215, 0))
        except Exception as e:
            print("Error", f, e)
            
    montage.save(output_path)
    print("Saved", output_path)

os.makedirs('scratch/montages', exist_ok=True)
create_montage(ad_refs[:12], 'scratch/montages/montage_1.jpg')
create_montage(ad_refs[12:24], 'scratch/montages/montage_2.jpg')
create_montage(ad_refs[24:], 'scratch/montages/montage_3.jpg')
