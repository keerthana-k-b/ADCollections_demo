import os
from PIL import Image

def analyze(folder="assets/images"):
    for f in sorted(os.listdir(folder)):
        if any(w in f for w in ["jewel-set", "necklace", "earrings", "saree-silk", "saree-bridal", "hero-01", "hero-02", "collection-08"]):
            p = os.path.join(folder, f)
            im = Image.open(p)
            print(f"{f:45} | Size: {im.size[0]}x{im.size[1]} | Ratio: {im.size[0]/im.size[1]:.2f}")

if __name__ == "__main__":
    analyze()
