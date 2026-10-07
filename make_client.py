"""
make_client.py - The AD Collections storefront packaging utility
Generates zipped client deployments from configured client.json fields.
"""
import json, os, re, shutil, sys, pathlib

def build_client(config_path="client.json"):
    cfg_file = pathlib.Path(config_path)
    if not cfg_file.exists():
        print(f"Config file {config_path} not found.")
        return
    cfg = json.loads(cfg_file.read_text(encoding="utf-8"))
    folder_name = cfg.get("folder", "ADCollections_demo")
    print(f"Loaded config for {folder_name}: {cfg.get('fields', {}).get('BRAND_NAME')}")

if __name__ == "__main__":
    cfg_arg = sys.argv[1] if len(sys.argv) > 1 else "client.json"
    build_client(cfg_arg)