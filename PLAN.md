# The AD Collections — Storefront Rebrand Master Documentation

> Complete implementation documentation of the luxury storefront rebrand for **The AD Collections** (`@theadcollections`), specializing in curated heirloom sarees and handcrafted artisanal temple jewellery.

---

## 1. Brand Identity & Contact Configuration

- **Brand Name**: The AD Collections
- **Tagline**: Jewellery & Sarees
- **Phone / WhatsApp Display**: `+91 80754 45660`
- **Phone Tel Link**: `tel:+918075445660`
- **WhatsApp Web Link**: `https://wa.me/918075445660`
- **Instagram**: `https://www.instagram.com/theadcollections` (`@theadcollections`)
- **Address**: Visit us / Contact us on WhatsApp (Kerala, India)
- **Price Configuration**: Dynamic pricing support in `client.json` (`PRICE_MODE: "starting_from"` or `"price_on_enquiry"`)

---

## 2. Category Architecture

The collection catalog features exclusively 8 categories divided into two primary departments:

### Sarees Collection
1. **Silk Sarees** (`silk-sarees`): Pure Kanchipuram, Banarasi, and temple border handlooms.
2. **Bridal Sarees** (`bridal-sarees`): Kerala Kasavu, royal bridal weaves, and ornate zari drapes.
3. **Party Wear Sarees** (`party-wear-sarees`): Metallic shimmer silks, organzas, and evening drapes.
4. **Festive Sarees** (`festive-sarees`): Celebratory handlooms, Kasavu pastels, and embroidered organzas.

### Jewellery Collection
5. **Necklaces** (`necklaces`): Heritage temple harams, antique Lakshmi chokers, and emerald pendants.
6. **Earrings** (`earrings`): Antique Lakshmi jhumkas, peacock ear cuffs, and kundan drops.
7. **Bangles** (`bangles`): Temple kadas, bridal emerald sets, and floral bracelets.
8. **Bridal Sets** (`bridal-sets`): Complete bridal suites, polki chokers, and coordinated styling packages.

---

## 3. Visual System & Color Palette

- **Primary Deep Maroon**: `#5A0F1F`
- **Darker Maroon**: `#380811`
- **Lighter Maroon**: `#7A192D`
- **Accent Antique Gold**: `#C9A24B` / `#DFBF73`
- **Background Ivory**: `#FAF6EE`
- **Cream Background**: `#F5EFE1`
- **WhatsApp Icon / Action Green**: `#25D366`

---

## 4. Product Catalog Summary

30 master catalog items defined in `js/products.js`:
- Sarees priced ₹1,500 – ₹9,000 (bridal silks up to ₹15,000)
- Jewellery priced ₹400 – ₹3,500
- Formatted as `"Starting from ₹X,XXX"` or `"Price on enquiry"`
- Material & colour attributes with pairing references for "Complete the Look" dual enquiry.
