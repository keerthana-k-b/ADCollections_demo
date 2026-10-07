import os, re, glob

ROOT = r'd:\ADCollections_demo'
EXTS = {'.html', '.css', '.js', '.json', '.md'}

TERMS = [
    "Your Brand",
    "Fashion & Apparel",
    "123 Main Street",
    "Your City",
    "Your State",
    "000000",
    "90000 00000",
    "9000000000",
    "9876543210",
    "yourbrand",
    "Apparel",
    "Flagship",
    "teal",
    "green",
    "Mayookha",
    "Mloft",
    "Yara",
    "Panchali",
    "Ethnic Wear",
    "Western Wear",
    "Occasion Wear",
    "Casual Wear",
    "Festive Collection",
    "Artisanal Craft",
    "Signature Series"
]

results = {t: [] for t in TERMS}

for root, dirs, files in os.walk(ROOT):
    # skip scratch, .git, and ad_refs
    if 'scratch' in root or '.git' in root or 'ad_refs' in root:
        continue
    for file in files:
        ext = os.path.splitext(file)[1].lower()
        if ext in EXTS:
            path = os.path.join(root, file)
            rel_path = os.path.relpath(path, ROOT)
            try:
                with open(path, 'r', encoding='utf-8', errors='ignore') as f:
                    lines = f.readlines()
                for line_idx, line in enumerate(lines, 1):
                    for term in TERMS:
                        if re.search(r'\b' + re.escape(term) + r'\b', line, re.I):
                            results[term].append((rel_path, line_idx, line.strip()))
            except Exception as e:
                print(f"Error reading {rel_path}: {e}")

print("=== AUDIT SCAN RESULTS ===")
for term in TERMS:
    matches = results[term]
    # Filter WhatsApp green from count if checking green
    if term.lower() == 'green':
        non_wa = [m for m in matches if '#25D366' not in m[2] and '25D366' not in m[2]]
        print(f"{term}: {len(matches)} total ({len(non_wa)} non-WhatsApp)")
    else:
        print(f"{term}: {len(matches)} matches")

print("\nDetail sample for high hits:")
for term in ["Your Brand", "teal", "green", "Apparel", "Flagship", "Ethnic Wear"]:
    if results[term]:
        print(f"\n--- {term} ({len(results[term])} matches) ---")
        for rel_path, line_no, snippet in results[term][:10]:
            print(f"  {rel_path}:{line_no} => {snippet[:100]}")
