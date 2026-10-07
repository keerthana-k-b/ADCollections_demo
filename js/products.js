/**
 * The AD Collections — Master Product & Collection Catalog
 * Curated Sarees & Artisanal Jewellery
 * Categories:
 * - Sarees: Silk Sarees, Bridal Sarees, Party Wear Sarees, Festive Sarees
 * - Jewellery: Necklaces, Earrings, Bangles, Bridal Sets
 */

const CATEGORIES = [
  { slug: 'all', name: 'All Collections', desc: 'Curated heirloom sarees and handcrafted bridal jewellery' },
  { slug: 'silk-sarees', name: 'Silk Sarees', desc: 'Pure Kanchipuram, Banarasi & temple border handloom silks' },
  { slug: 'bridal-sarees', name: 'Bridal Sarees', desc: 'Regal bridal drapes with ornate zari & heirloom motifs' },
  { slug: 'party-wear-sarees', name: 'Party Wear Sarees', desc: 'Contemporary shimmer silks, organzas & evening drape wear' },
  { slug: 'festive-sarees', name: 'Festive Sarees', desc: 'Vibrant celebratory weaves, Kasavu silks & festive pastels' },
  { slug: 'necklaces', name: 'Necklaces', desc: 'Temple harams, antique chokers, gemstone pendants & mangalsutras' },
  { slug: 'earrings', name: 'Earrings', desc: 'Antique Lakshmi jhumkas, peacock ear cuffs & kundan drops' },
  { slug: 'bangles', name: 'Bangles', desc: 'Temple kadas, bridal glass sets & ruby emerald bangles' },
  { slug: 'bridal-sets', name: 'Bridal Sets', desc: 'Complete bridal jewellery suites, polki chokers & styling sets' }
];

const PRODUCTS = [
  // ==========================================
  // SILK SAREES
  // ==========================================
  {
    id: 'prod-01',
    name: 'Aurelia Rust Bronze Silk Saree',
    category: 'silk-sarees',
    categoryName: 'Silk Sarees',
    price: 'Starting from ₹6,800',
    basePrice: 6800,
    badge: 'Pure Handloom',
    images: [
      'assets/images/saree-silk-rust-orange.webp',
      'assets/images/saree-tissue-gold-zari-border.webp',
      'assets/images/styling-kasavu-choker-collage.webp'
    ],
    description: 'Exquisite rust bronze handwoven silk saree accented with a rich gilded zari border, auspicious geometric buttas, and a grand ceremonial pallu. Paired with an unstitched contrast brocade blouse piece.',
    fabric: 'Pure Mulberry Silk & Heavy Gold Zari',
    material: 'Pure Handloom Kanchipuram Silk',
    colour: 'Rust Bronze & Antique Gold',
    pairedProductId: 'prod-20', // Paired with Temple Lakshmi Jhumkas
    details: [
      'Authentic handloom silk certified with Silk Mark authentication',
      'Intricate temple korvai zari weaving along the selvedge',
      'Includes unstitched matching designer blouse fabric (0.8m)',
      'Custom blouse stitching and sleeve embellishment on request',
      'Preserved in breathable cotton heirloom keepsake bag'
    ]
  },
  {
    id: 'prod-02',
    name: 'Roja Heritage Tissue Gold Silk Saree',
    category: 'silk-sarees',
    categoryName: 'Silk Sarees',
    price: 'Starting from ₹8,200',
    basePrice: 8200,
    badge: 'Heirloom Weave',
    images: [
      'assets/images/saree-tissue-gold-zari-border.webp',
      'assets/images/saree-silk-rust-orange.webp',
      'assets/images/hero-02.webp'
    ],
    description: 'Luminous gold tissue silk drape shimmering with fine Kasavu metallic zari. Woven with delicate peacock motifs and architectural temple borders, creating a magnificent royal aesthetic.',
    fabric: 'Pure Silk Tissue with Fine Gold Kasavu Zari',
    material: 'Pure Silk Tissue Handloom',
    colour: 'Gilded Antique Gold & Kasavu Zari',
    pairedProductId: 'prod-19', // Paired with Veda Temple Emerald Bead Lakshmi Haram
    details: [
      'Fine metallic tissue weave with fluid, featherlight drape',
      'Authentic Kerala temple korvai border architecture',
      'Comes with matching woven tissue gold blouse fabric',
      'Anti-tarnish treated metallic threads for enduring radiance',
      'Complimentary styling consultation with our bridal curators'
    ]
  },
  {
    id: 'prod-03',
    name: 'Ananya Pastel Pink & Black Temple Silk Saree',
    category: 'silk-sarees',
    categoryName: 'Silk Sarees',
    price: 'Starting from ₹5,900',
    basePrice: 5900,
    badge: 'Bestseller',
    images: [
      'assets/images/saree-silk-pink-black-hanger.webp',
      'assets/images/saree-silk-rust-orange.webp'
    ],
    description: 'A striking color combination uniting soft blush pink body with an opulent midnight black border. Decorated with temple gopuram zari stripes and a heritage striped pallu.',
    fabric: 'Fine Pure Silk Handloom',
    material: 'Pure Handloom Silk with Contrast Zari Border',
    colour: 'Blush Pink & Midnight Black',
    pairedProductId: 'prod-24', // Paired with Maroon Kundan Drop Earrings
    details: [
      'Handcrafted on traditional wooden looms in South India',
      'Contrast midnight black pallu with metallic gold stripes',
      'Includes contrast unstitched black silk blouse fabric',
      'Gentle hand-knotted tassel finishing on the pallu hem',
      'Certified authentic pure silk craftsmanship'
    ]
  },

  // ==========================================
  // BRIDAL SAREES
  // ==========================================
  {
    id: 'prod-04',
    name: 'Vaidhehi Imperial Maroon Bridal Kasavu Saree',
    category: 'bridal-sarees',
    categoryName: 'Bridal Sarees',
    price: 'Starting from ₹14,500',
    basePrice: 14500,
    badge: 'Bridal Signature',
    images: [
      'assets/images/saree-bridal-kasavu-maroon.webp',
      'assets/images/styling-kasavu-choker-collage.webp',
      'assets/images/hero-02.webp'
    ],
    description: 'The quintessential AD Collections bridal masterpiece. Pristine Kerala Kasavu silk framed by dual-tone maroon and bottle emerald borders, paired with an embellished deep maroon brocade blouse and artisanal emerald tassels.',
    fabric: 'Heritage Kerala Kasavu Silk & Pure Gold Brocade',
    material: 'Authentic Kerala Handloom Kasavu Silk & Pure Zari',
    colour: 'Deep Maroon, Forest Emerald & Gold Zari',
    pairedProductId: 'prod-29', // Paired with Devangana Antique Ruby Temple Choker Set
    details: [
      'Bespoke bridal ensemble conceptualized for ceremonial rituals',
      'Includes coordinated deep maroon brocade blouse with bootis',
      'Hand-finished emerald and maroon hanging pompom tassels',
      'Complete matching jewellery set recommendations available',
      'Bespoke fittings and worldwide bridal dispatch'
    ]
  },
  {
    id: 'prod-05',
    name: 'Padmavati Crimson Bridal Weave Saree',
    category: 'bridal-sarees',
    categoryName: 'Bridal Sarees',
    price: 'Starting from ₹12,800',
    basePrice: 12800,
    badge: 'Heritage Bridal',
    images: [
      'assets/images/saree-crimson-bridal-silk.webp',
      'assets/images/saree-bridal-kasavu-maroon.webp',
      'assets/images/hero-05.webp'
    ],
    description: 'Sacred crimson bridal silk woven with auspicious temple peacocks, floral vines, and heavy gold zari brocade across the pleats. A ceremonial heirloom designed to be treasured for generations.',
    fabric: 'Heavy-Ply Pure Bridal Silk & Fine Zari',
    material: 'Pure Bridal Silk & 24K Tone Zari',
    colour: 'Royal Crimson Red & Gold Zari',
    pairedProductId: 'prod-16', // Paired with Ruby Drop Choker
    details: [
      'Heirloom heavy drape certified with Silk Mark authentication',
      'Solid gold brocade pallu with ceremonial temple motifs',
      'Includes heavy embroidered matching silk blouse piece',
      'Protective archival wrapping included with each bridal purchase',
      'Custom made-to-measure bridal blouse tailoring available'
    ]
  },
  {
    id: 'prod-06',
    name: 'Kalyani Royal Emerald & Rose Gold Bridal Silk Saree',
    category: 'bridal-sarees',
    categoryName: 'Bridal Sarees',
    price: 'Starting from ₹13,500',
    basePrice: 13500,
    badge: 'Celebrity Pick',
    images: [
      'assets/images/saree-emerald-haram-bridal-look.webp',
      'assets/images/saree-bridal-kasavu-maroon.webp'
    ],
    description: 'Magnificent bridal creation featuring subtle rose gold and antique zari shimmer. Highlighted in our bridal campaign paired with imperial emerald harams for breathtaking ceremonial grandeur.',
    fabric: 'South Indian Handloom Pure Silk',
    material: 'Pure Handloom Silk & Metallic Rose Gold Zari',
    colour: 'Rose Gold Champagne & Antique Zari',
    pairedProductId: 'prod-19', // Paired with Veda Temple Emerald Bead Haram
    details: [
      'Woven with micro-twist zari for unmatched luminosity and softness',
      'Grand bridal border featuring floral scroll and temple korvai',
      'Includes designer raw silk blouse piece with embroidered border',
      'Complimentary personal styling session with AD Collections founders',
      'Worldwide tracked express shipping available'
    ]
  },

  // ==========================================
  // PARTY WEAR SAREES
  // ==========================================
  {
    id: 'prod-07',
    name: 'Charulata Metallic Charcoal Shimmer Saree',
    category: 'party-wear-sarees',
    categoryName: 'Party Wear Sarees',
    price: 'Starting from ₹4,500',
    basePrice: 4500,
    badge: 'Contemporary',
    images: [
      'assets/images/saree-partywear-charcoal-shimmer.webp',
      'assets/images/saree-partywear-cream-floral.webp'
    ],
    description: 'Modern evening glamour rendered in metallic charcoal shimmer silk organza. Features a glistening micro-textured border, lightweight cascading pleats, and sleek contemporary presence.',
    fabric: 'Metallic Shimmer Silk Organza',
    material: 'Sheer Metallic Shimmer Silk Organza',
    colour: 'Charcoal Bronze & Gilded Zari',
    pairedProductId: 'prod-22', // Paired with Peacock Ear Cuffs
    details: [
      'Fluid, lightweight drape ideal for receptions, sangeets & cocktails',
      'Subtle metallic sheen that catches evening light beautifully',
      'Includes unstitched shimmer coordinated blouse piece',
      'Pre-stitched pleats option available upon request',
      'Easy to drape and stays impeccably creaseless all evening'
    ]
  },
  {
    id: 'prod-08',
    name: 'Mira Floral Hand-Printed Cream Organza Saree',
    category: 'party-wear-sarees',
    categoryName: 'Party Wear Sarees',
    price: 'Starting from ₹3,800',
    basePrice: 3800,
    badge: 'Trending',
    images: [
      'assets/images/saree-partywear-cream-floral.webp',
      'assets/images/saree-partywear-ivory-floral-courtyard.webp'
    ],
    description: 'Airy cream organza drape blooming with delicate hand-printed botanical bouquets in sapphire, rose, and emerald tones. Finished with scalloped pearl and zari embroidered edging.',
    fabric: 'Pure Silk Organza with Fine Scalloped Embroidery',
    material: 'Pure Sheer Silk Organza',
    colour: 'Ivory Cream with Botanical Pastels',
    pairedProductId: 'prod-17', // Paired with Navratna Multicolor Festive Chain
    details: [
      'Ethereal sheer texture with gentle, graceful body',
      'Delicate cutwork embroidery running along the entire hem and pallu',
      'Comes with unstitched matching pure raw silk blouse fabric',
      'Lightweight and comfortable for daytime receptions and garden parties',
      'Gentle dry clean recommended'
    ]
  },
  {
    id: 'prod-09',
    name: 'Avani Ivory Lotus Bloom Organza Saree',
    category: 'party-wear-sarees',
    categoryName: 'Party Wear Sarees',
    price: 'Starting from ₹4,200',
    basePrice: 4200,
    badge: 'Editorial Pick',
    images: [
      'assets/images/saree-partywear-ivory-floral-courtyard.webp',
      'assets/images/saree-partywear-cream-floral.webp'
    ],
    description: 'Graceful ivory organza saree inspired by tranquil South Indian courtyards. Features hand-painted pink lotus and emerald foliage prints with an ornate scalloped border and pearl tassels.',
    fabric: 'Fine Silk Organza',
    material: 'Lightweight Organza Silk with Zari Scallop',
    colour: 'Pristine Ivory & Lotus Watercolours',
    pairedProductId: 'prod-15', // Paired with Butterfly Emerald Pendant
    details: [
      'Hand-rendered floral motifs with artisan touch',
      'Embroidered scalloped borders with fine threadwork',
      'Includes unstitched silk blouse piece',
      'Breathable, airy weave that drapes with royal poise',
      'Authentic AD Collections creation'
    ]
  },

  // ==========================================
  // FESTIVE SAREES
  // ==========================================
  {
    id: 'prod-10',
    name: 'Devika Hand-Embroidered White Organza Saree',
    category: 'festive-sarees',
    categoryName: 'Festive Sarees',
    price: 'Starting from ₹3,600',
    basePrice: 3600,
    badge: 'Festive Edit',
    images: [
      'assets/images/saree-organza-white-embroidered.webp',
      'assets/images/hero-01.webp',
      'assets/images/saree-organza-yellow-festive.webp'
    ],
    description: 'Signature AD Collections festive drape in pure white organza. Adorned with tone-on-tone ivory silk thread floral embroidery, delicate sequin accents, and ornate scalloped lace borders.',
    fabric: 'Fine Silk Organza with Hand Threadwork & Micro Sequins',
    material: 'Pure Silk Organza & Fine Thread Embroidery',
    colour: 'Pristine White & Subtle Silver-Gold Sheen',
    pairedProductId: 'prod-21', // Paired with Ruby Emerald Jhumkas
    details: [
      'Elaborate floral vine embroidery across body and scalloped pallu',
      'Featherlight weight with structured drape structure',
      'Includes unstitched embroidered pure silk blouse fabric',
      'Perfect for temple visits, engagement ceremonies, and Onam/festivals',
      'Crafted with hand-inspected finishing in our atelier'
    ]
  },
  {
    id: 'prod-11',
    name: 'Suryakanti Marigold Yellow Organza Saree',
    category: 'festive-sarees',
    categoryName: 'Festive Sarees',
    price: 'Starting from ₹3,200',
    basePrice: 3200,
    badge: 'Haldi & Festive',
    images: [
      'assets/images/saree-organza-yellow-festive.webp',
      'assets/images/hero-03.webp',
      'assets/images/saree-organza-white-embroidered.webp'
    ],
    description: 'Radiant sunshine yellow festive organza drape adorned with delicate white and cream silk embroidery. Styled with scalloped hemline, bringing sunshine elegance to Haldi and festive celebrations.',
    fabric: 'Silk Organza with Resham Threadwork',
    material: 'Pure Silk Organza',
    colour: 'Sunny Marigold Yellow & Ivory',
    pairedProductId: 'prod-20', // Paired with Temple Lakshmi Jhumkas
    details: [
      'Vibrant auspicious yellow palette with luminous translucency',
      'Hand-embroidered resham florals with scalloped borders',
      'Includes unstitched raw silk blouse piece in matching shade',
      'Comfortable lightweight drape that holds pleats effortlessly',
      'Exclusive AD Collections festive catalog piece'
    ]
  },
  {
    id: 'prod-12',
    name: 'Tharavadu Classic Kerala Kasavu Festive Drape',
    category: 'festive-sarees',
    categoryName: 'Festive Sarees',
    price: 'Starting from ₹1,850',
    basePrice: 1850,
    badge: 'Heritage',
    images: [
      'assets/images/saree-kasavu-magenta-blouse.webp',
      'assets/images/saree-kasavu-pink-border-full.webp',
      'assets/images/story-02.webp'
    ],
    description: 'Timeless Kerala Kasavu handloom weave featuring authentic pure gold zari borders and auspicious temple motifs. Worn with traditional elegance for Onam, Vishu, and ceremonial rituals.',
    fabric: 'Handloom Cotton Silk Kasavu & Fine Zari',
    material: 'Pure Handloom Kerala Kasavu Cotton Silk',
    colour: 'Natural Off-White & Golden Zari',
    pairedProductId: 'prod-18', // Paired with Mangalya Floral Black Bead Mangalsutra
    details: [
      'Woven by master weavers adhering to ancient Kerala traditions',
      'Rich golden Kasavu zari border that retains natural sheen',
      'Comes with running Kasavu border blouse fabric',
      'Breathable, airy, and exceptionally comfortable for long ceremonies',
      'Includes certificate of handloom authenticity'
    ]
  },
  {
    id: 'prod-13',
    name: 'Souparnika Pink Border Kasavu Silk Saree',
    category: 'festive-sarees',
    categoryName: 'Festive Sarees',
    price: 'Starting from ₹2,400',
    basePrice: 2400,
    badge: 'Festive Pick',
    images: [
      'assets/images/saree-kasavu-pink-border-full.webp',
      'assets/images/saree-kasavu-magenta-blouse.webp',
      'assets/images/story-03.webp'
    ],
    description: 'Contemporary interpretation of the Kerala Kasavu drape featuring vibrant rani pink selvedge borders, dual gold zari lines, and contrast festive pallu styling.',
    fabric: 'Fine Kasavu Silk Blend',
    material: 'Kerala Kasavu Silk with Rani Pink Selvedge',
    colour: 'Ivory White with Contrast Rani Pink Border',
    pairedProductId: 'prod-27', // Paired with Emerald Bridal Bangle Set
    details: [
      'Vibrant color pop along traditional Kasavu off-white base',
      'Solid zari stripes on pallu with hand-twisted tassels',
      'Includes matching rani pink blouse piece',
      'Ideal for festive temple pujas, family functions, and weddings',
      'Care: Dry clean or gentle hand wash in cold water'
    ]
  },

  // ==========================================
  // JEWELLERY: NECKLACES
  // ==========================================
  {
    id: 'prod-14',
    name: 'Aaradhya Antique Lakshmi Temple Pendant Necklace',
    category: 'necklaces',
    categoryName: 'Necklaces',
    price: 'Starting from ₹2,850',
    basePrice: 2850,
    badge: 'Temple Craft',
    images: [
      'assets/images/jewel-necklace-temple-lakshmi.webp',
      'assets/images/jewel-set-antique-ruby-choker.webp',
      'assets/images/jewel-earrings-temple-lakshmi-jhumka.webp'
    ],
    description: 'Magnificent South Indian temple necklace centered with a hand-sculpted Goddess Lakshmi pendant framed by dancing peacocks, auspicious ruby kemp stones, and beaded gold chain. Comes with matching stud jhumkas.',
    fabric: '24K Matte Gold Electroplate over Brass Alloy',
    material: 'Antique Matte Gold Finish with Kemp Ruby & Emerald',
    colour: 'Antique Temple Gold with Ruby Kemp',
    pairedProductId: 'prod-04', // Paired with Vaidhehi Maroon Kasavu Saree
    details: [
      'Heirloom antique matte gold micro-plating with heritage patina',
      'Hand-set ruby and emerald kemp stones in traditional prong settings',
      'Adjustable gold rope dori at back for versatile collar or long fit',
      'Anti-tarnish protective lacquer coating for decades of radiance',
      'Includes matching stud earrings with screw-back closures'
    ]
  },
  {
    id: 'prod-15',
    name: 'Mayuri Emerald Butterfly Pendant Necklace',
    category: 'necklaces',
    categoryName: 'Necklaces',
    price: 'Starting from ₹1,250',
    basePrice: 1250,
    badge: 'Contemporary Classic',
    images: [
      'assets/images/jewel-butterfly-emerald-pendant.webp',
      'assets/images/jewel-necklace-gemstone-multicolor.webp'
    ],
    description: 'A poetic celebration of nature. Sculpted butterfly motif featuring mint emerald enamel wings, sparkling cubic zirconia florets, and delicate cascading drop chains with bezel-set stones.',
    fabric: '18K Yellow Gold Polish over Fine Jeweller Brass',
    material: '18K Gold Polish with Mint Enamel & Micro CZ',
    colour: 'Yellow Gold & Mint Emerald',
    pairedProductId: 'prod-10', // Paired with Devika White Organza Saree
    details: [
      'Lightweight, modern silhouette perfect for sarees and festive occasions',
      'Fine cable chain with lobster clasp and extension links',
      'Faceted mint emerald drop stone with sparkling brilliance',
      'Hypoallergenic, nickel-free composition for comfortable daily wear',
      'Packaged in signature velvet-lined AD Collections gift box'
    ]
  },
  {
    id: 'prod-16',
    name: 'Aathira Ruby Drop Floral Choker Necklace',
    category: 'necklaces',
    categoryName: 'Necklaces',
    price: 'Starting from ₹2,200',
    basePrice: 2200,
    badge: 'Bestseller',
    images: [
      'assets/images/jewel-necklace-ruby-drop-model.webp',
      'assets/images/jewel-necklace-ruby-drop-bust.webp',
      'assets/images/jewel-set-antique-ruby-choker.webp'
    ],
    description: 'Regal collar necklace crowned with marquise-cut ruby florets and a central teardrop ruby pendant. Delicate micro-pearl and gold bead drops dance along the bottom edge, framing the neckline with royal splendor.',
    fabric: 'Antique Matte Gold Finish with Kemp Rubies',
    material: 'Antique Gold Polish with Faceted Kemp Rubies & Pearls',
    colour: 'Deep Ruby Red & Antique Gold',
    pairedProductId: 'prod-05', // Paired with Padmavati Crimson Bridal Saree
    details: [
      'Classic South Indian bridal collar choker with flexible comfort link',
      'Faceted high-clarity simulated rubies in prong bezel setting',
      'Includes matching pear-shaped ruby drop earrings',
      'Adjustable back thread dori to fit all neck sizes seamlessly',
      'Handmade with traditional goldsmith techniques in Kerala'
    ]
  },
  {
    id: 'prod-17',
    name: 'Navratna Multi-Stone Minimalist Festive Chain',
    category: 'necklaces',
    categoryName: 'Necklaces',
    price: 'Starting from ₹950',
    basePrice: 950,
    badge: 'Modern Heirloom',
    images: [
      'assets/images/jewel-necklace-gemstone-multicolor.webp',
      'assets/images/jewel-butterfly-emerald-pendant.webp'
    ],
    description: 'An elegant contemporary choker necklace stringing radiant colored gemstones—ruby pink, emerald, citrine yellow, and sapphire blue—alternating with delicate starburst crystal clusters.',
    fabric: 'High-Polish Gold with Semi-Precious Stones',
    material: '18K Gold Polish with Faceted Multi-Colour Gemstones',
    colour: 'Multi-Colour Gemstones on Bright Yellow Gold',
    pairedProductId: 'prod-08', // Paired with Mira Floral Cream Organza Saree
    details: [
      'Versatile statement piece that complements all festive saree palettes',
      'Lightweight design with secure lobster claw clasp and extender',
      'Includes matching rectangular gemstone drop earrings',
      'High-grade cubic zirconia with diamond-grade brilliance',
      'Exclusive AD Collections festive curation'
    ]
  },
  {
    id: 'prod-18',
    name: 'Mangalya Floral Cluster Black Bead Mangalsutra',
    category: 'necklaces',
    categoryName: 'Necklaces',
    price: 'Starting from ₹750',
    basePrice: 750,
    badge: 'Everyday Luxury',
    images: [
      'assets/images/jewel-mangalsutra-floral-blackbead.webp',
      'assets/images/jewel-necklace-temple-emerald-beads.webp'
    ],
    description: 'Contemporary short mangalsutra featuring dainty floral florets stationed along auspicious double-string black onyx beads. Perfect for modern brides seeking lightweight daily elegance.',
    fabric: 'Gold Plated Alloy with Black Onyx Beads',
    material: 'Micro Gold Plating & Natural Black Onyx Beads',
    colour: 'Black, Gold & White Crystals',
    pairedProductId: 'prod-12', // Paired with Tharavadu Kasavu Saree
    details: [
      'Symbolic auspicious design re-imagined with modern minimalism',
      '18-inch length that rests gracefully along the collarbone',
      'Micro-prong set cubic zirconia flowers with brilliant sparkle',
      'Durable multi-strand beading wire resistant to stretching',
      'Ideal gift for brides, anniversaries, and festive gifting'
    ]
  },
  {
    id: 'prod-19',
    name: 'Veda Temple Emerald Bead Lakshmi Haram',
    category: 'necklaces',
    categoryName: 'Necklaces',
    price: 'Starting from ₹3,200',
    basePrice: 3200,
    badge: 'Bridal Haram',
    images: [
      'assets/images/jewel-necklace-temple-emerald-beads.webp',
      'assets/images/jewel-necklace-temple-lakshmi.webp',
      'assets/images/hero-05.webp'
    ],
    description: 'Grand South Indian long temple haram featuring carved Lakshmi medallions, royal peacock side-links, and strings of lustrous bottle-emerald beads. Accented with pearl fringes and antique matte gold finish.',
    fabric: 'Antique Matte Gold Polish with Faceted Emerald Beads',
    material: 'Antique Matte Gold Finish with Kemp & Emerald Beads',
    colour: 'Temple Gold & Deep Forest Emerald',
    pairedProductId: 'prod-06', // Paired with Kalyani Royal Emerald Bridal Saree
    details: [
      '24-inch long bridal haram that layers magnificently over chokers',
      'Detailed die-cast Lakshmi and peacock motifs from temple archives',
      'Hand-strung faceted emerald emerald beads with seed pearl drops',
      'Includes matching temple stud earrings with push backs',
      'Signature AD Collections heirloom bridal curation'
    ]
  },

  // ==========================================
  // JEWELLERY: EARRINGS
  // ==========================================
  {
    id: 'prod-20',
    name: 'Lakshmi Antique Matte Gold Temple Jhumkas',
    category: 'earrings',
    categoryName: 'Earrings',
    price: 'Starting from ₹850',
    basePrice: 850,
    badge: 'Temple Classic',
    images: [
      'assets/images/jewel-earrings-temple-lakshmi-jhumka.webp',
      'assets/images/jewel-earrings-emerald-center-jhumka.webp',
      'assets/images/jewel-necklace-temple-lakshmi.webp'
    ],
    description: 'Sacred bell jhumkas embossed with the Goddess Lakshmi motif on the upper stud and detailed micro-filigree floral patterns across the bell dome. Finished with dancing seed pearl drops.',
    fabric: 'Matte Antique Gold Polish over Brass Alloy',
    material: 'Antique Matte Temple Gold & Pearls',
    colour: 'Antique Temple Gold',
    pairedProductId: 'prod-01', // Paired with Aurelia Rust Bronze Silk Saree
    details: [
      'Authentic South Indian temple jewellery silhouette',
      'Lightweight hollow-dome bell construction for pain-free wear',
      'Secure South Indian push-back / screw-back closure',
      'Pairs seamlessly with silk sarees, Kasavu drapes, and festive wear',
      'Tarnish-resistant coating with velvet pouch storage'
    ]
  },
  {
    id: 'prod-21',
    name: 'Padmaraga Ruby Emerald Floral Jhumkas',
    category: 'earrings',
    categoryName: 'Earrings',
    price: 'Starting from ₹950',
    basePrice: 950,
    badge: 'Festive Sparkle',
    images: [
      'assets/images/jewel-earrings-emerald-center-jhumka.webp',
      'assets/images/jewel-earrings-temple-lakshmi-jhumka.webp',
      'assets/images/jewel-earrings-pearl-cascade-jhumka.webp'
    ],
    description: 'Dazzling dual-stone festive jhumkas. The sunburst stud features a glowing emerald center surrounded by brilliant-cut cubic zirconia, suspending a bell jhumka ringed with ruby kemp stones and pearl droplets.',
    fabric: 'High-Polish Gold with Micro-Pave CZ & Kemp Stones',
    material: 'High-Lustre Gold Polish with CZ, Ruby & Emerald',
    colour: 'Yellow Gold, Emerald & Ruby Pink',
    pairedProductId: 'prod-11', // Paired with Suryakanti Marigold Yellow Saree
    details: [
      'Statement bridal and festive earring with brilliant light reflection',
      'High-grade cubic zirconia in diamond prong setting',
      'Micro-drop pearl hangings along the jhumka perimeter',
      'Comfort-fit post suitable for all ear lobe types',
      'Guaranteed polish longevity with proper care'
    ]
  },
  {
    id: 'prod-22',
    name: 'Mayurakshi Peacock Ear Cuffs with Jhumka Drops',
    category: 'earrings',
    categoryName: 'Earrings',
    price: 'Starting from ₹1,450',
    basePrice: 1450,
    badge: 'Showstopper',
    images: [
      'assets/images/jewel-earrings-peacock-cuff-dual.webp',
      'assets/images/jewel-earrings-peacock-cuff-matte.webp',
      'assets/images/jewel-earrings-peacock-cuff-ad.webp'
    ],
    description: 'Breathtaking full-ear cuffs tracing the ear contour with sculpted peacock feathers set with marquise ruby stones. Features an upper lobe bell jhumka and dangling lower jhumka with pearl fringes.',
    fabric: 'Antique Brass Gold with Kemp Ruby Stones',
    material: 'Antique Matte Gold Finish with Kemp & Seed Pearls',
    colour: 'Antique Gold, Ruby Kemp & Pearl White',
    pairedProductId: 'prod-07', // Paired with Charulata Metallic Charcoal Saree
    details: [
      'Full ear cuff (kannadi mattal) design requiring only single lobe piercing',
      'Adjustable upper cuff clip that gently hugs the cartilage securely',
      'Dual jhumka bells with fine enamel and ruby accents',
      'Turn heads at weddings, receptions, and traditional celebrations',
      'Signature statement design exclusive to The AD Collections'
    ]
  },
  {
    id: 'prod-23',
    name: 'Chandrika Pearl Cascade Chandbali Jhumkas',
    category: 'earrings',
    categoryName: 'Earrings',
    price: 'Starting from ₹1,150',
    basePrice: 1150,
    badge: 'Bridal Must-Have',
    images: [
      'assets/images/jewel-earrings-pearl-cascade-jhumka.webp',
      'assets/images/jewel-earrings-emerald-center-jhumka.webp'
    ],
    description: 'Spectacular bridal earrings featuring a floral ruby-studded stud and a crescent chandbali silhouette that cascades into five tiers of hand-woven freshwater seed pearls.',
    fabric: 'Gold Micro-Plated Brass with Natural Seed Pearls',
    material: 'Micro Gold Plating, Kemp Stones & Natural Seed Pearls',
    colour: 'Gold, Ruby & Luminous Pearl White',
    pairedProductId: 'prod-04', // Paired with Vaidhehi Maroon Kasavu Saree
    details: [
      'Handcrafted pearl stringing by master jewellery artisans',
      'Dramatic shoulder-grazing length that accentuates bridal hairstyles',
      'Lightweight balance engineered for comfortable multi-hour wear',
      'Includes silicone comfort backs and traditional screw post',
      'Presented in bridal keepsake packaging'
    ]
  },
  {
    id: 'prod-24',
    name: 'Manikya Maroon Kundan Drop Earrings',
    category: 'earrings',
    categoryName: 'Earrings',
    price: 'Starting from ₹650',
    basePrice: 650,
    badge: 'Royal Kundan',
    images: [
      'assets/images/jewel-earrings-kundan-maroon-drop.webp',
      'assets/images/jewel-earrings-temple-lakshmi-jhumka.webp'
    ],
    description: 'Vintage royal aesthetic featuring cabochon maroon stones ringed with sparkling kundan crystal florets and hanging seed pearls. Elegant, lightweight, and versatile.',
    fabric: 'Gold Finish with Maroon Enamel & Kundan',
    material: 'Antique Gold Polish with Cabochon Maroon & Kundan',
    colour: 'Deep Maroon, Gold & Pearl White',
    pairedProductId: 'prod-03', // Paired with Ananya Pink & Black Saree
    details: [
      'Classic heritage silhouette inspired by royal darbar jewels',
      'Rich deep maroon stone that complements silk sarees perfectly',
      'Featherlight weight for effortless day-to-night styling',
      'High-grade glass kundan stones set in traditional foil backings',
      'Easy push-back post for secure wear'
    ]
  },

  // ==========================================
  // JEWELLERY: BANGLES
  // ==========================================
  {
    id: 'prod-25',
    name: 'Aishwarya Antique Temple Kada with Lakshmi Motif',
    category: 'bangles',
    categoryName: 'Bangles',
    price: 'Starting from ₹1,850',
    basePrice: 1850,
    badge: 'Heritage Kada',
    images: [
      'assets/images/jewel-bangles-temple-kada-lakshmi.webp',
      'assets/images/jewel-bangles-ruby-emerald-square.webp',
      'assets/images/jewel-set-antique-ruby-choker.webp'
    ],
    description: 'Heirloom openable temple kada bangles heavily embossed with seated Goddess Lakshmi figures, celestial peacocks, and floral arabesque filigree. Finished with screw-pin closure for secure fit.',
    fabric: 'Heavy Cast Brass Alloy with 24K Matte Microplate',
    material: 'Antique Matte Gold Finish with Kemp Accents',
    colour: 'Antique Temple Gold with Ruby & Emerald Highlights',
    pairedProductId: 'prod-01', // Paired with Aurelia Rust Bronze Silk Saree
    details: [
      'Sold as a pair (2 bangles) with precision screw-pin opening',
      'Available in standard sizes 2.4, 2.6, and 2.8',
      'Heavy substantial weight resembling authentic 22K temple jewellery',
      'Intricate carving on all sides with smooth comfortable inner lining',
      'Certificate of quality craft and anti-tarnish storage pouch'
    ]
  },
  {
    id: 'prod-26',
    name: 'Ratnavali Ruby & Emerald Square Cut Bridal Bangles',
    category: 'bangles',
    categoryName: 'Bangles',
    price: 'Starting from ₹2,100',
    basePrice: 2100,
    badge: 'Bridal Pair',
    images: [
      'assets/images/jewel-bangles-ruby-emerald-square.webp',
      'assets/images/jewel-bangles-temple-kada-lakshmi.webp',
      'assets/images/jewel-bangles-emerald-bridal-set.webp'
    ],
    description: 'Pair of opulent bridal bangles paved with alternating square-cut ruby red and emerald kemp crystals. Interspersed with floral four-petal gold stations.',
    fabric: 'High-Polish Gold Finish with Channel-Set Kemp Stones',
    material: 'Gold Micro-Plating with Faceted Square Kemp Stones',
    colour: 'Ruby Red, Emerald & Bright Gold',
    pairedProductId: 'prod-05', // Paired with Padmavati Crimson Bridal Saree
    details: [
      'Set of 2 bridal bangles with flawless prong-set stones',
      'Smooth hand-finished inner rim that will not snag delicate sarees',
      'Available in sizes 2.4, 2.6, 2.8',
      'Radiant color combination auspicious for wedding rituals',
      'Crafted in limited small-batch editions'
    ]
  },
  {
    id: 'prod-27',
    name: 'Suvarna Traditional Emerald Glass & Zari Bridal Bangle Set',
    category: 'bangles',
    categoryName: 'Bangles',
    price: 'Starting from ₹650',
    basePrice: 650,
    badge: 'Auspicious Set',
    images: [
      'assets/images/jewel-bangles-emerald-bridal-set.webp',
      'assets/images/jewel-bangles-ruby-emerald-square.webp',
      'assets/images/styling-kasavu-choker-collage.webp'
    ],
    description: 'Auspicious bridal chuda set composed of rich forest-emerald glass bangles flanked by micro-embossed antique gold kada borders and pearl-studded side bangles. Essential for South Indian bridal styling.',
    fabric: 'Traditional Velvet Glass & Antique Metal Bangles',
    material: 'High-Quality Glass Bangles with Antique Gold Metal Borders',
    colour: 'Deep Forest Emerald & Antique Gold',
    pairedProductId: 'prod-13', // Paired with Souparnika Pink Border Kasavu Saree
    details: [
      'Full set containing 24 glass bangles + 4 antique metal accent bangles',
      'Symbolizes prosperity, fertility, and marital auspiciousness',
      'Available in bangle sizes 2.4, 2.6, 2.8',
      'Packed with protective cushion box for safe transit',
      'Pairs magically with Kasavu sarees and maroon silk brocades'
    ]
  },

  // ==========================================
  // JEWELLERY: BRIDAL SETS
  // ==========================================
  {
    id: 'prod-28',
    name: 'Rajkumari Polki & Pearl Bridal Choker Set',
    category: 'bridal-sets',
    categoryName: 'Bridal Sets',
    price: 'Starting from ₹3,400',
    basePrice: 3400,
    badge: 'Bridal Grandeur',
    images: [
      'assets/images/jewel-set-polki-pearl-choker.webp',
      'assets/images/jewel-set-antique-ruby-choker.webp',
      'assets/images/saree-bridal-kasavu-maroon.webp'
    ],
    description: 'A bridal dream suite. Ornate collar choker set with uncut polki stones in closed back settings, surrounded by delicate seed pearls, matching statement studs, and a coordinated maang tikka.',
    fabric: 'Uncut Jadau Polki Stones & Strung Pearls on Silver Alloy Base',
    material: 'Gold Foiled Polki, Shell Pearls & Antique Gold Finish',
    colour: 'Antique Gold & Luminous Pearl White',
    pairedProductId: 'prod-06', // Paired with Kalyani Royal Emerald Bridal Saree
    details: [
      'Complete 3-piece bridal suite: Choker Necklace + Earrings + Maang Tikka',
      'Handcrafted using traditional Jadau setting techniques',
      'Comfortable velvet backing prevents chafing on the collarbone',
      'Adjustable woven gold thread dori fits all necklines',
      'Presented in a premium wooden bridal jewellery chest'
    ]
  },
  {
    id: 'prod-29',
    name: 'Devangana Antique Ruby Temple Choker Set',
    category: 'bridal-sets',
    categoryName: 'Bridal Sets',
    price: 'Starting from ₹3,100',
    basePrice: 3100,
    badge: 'Signature Bridal',
    images: [
      'assets/images/jewel-set-antique-ruby-choker.webp',
      'assets/images/jewel-necklace-temple-lakshmi.webp',
      'assets/images/saree-bridal-kasavu-maroon.webp'
    ],
    description: 'The defining bridal creation of The AD Collections. Heavy antique matte gold choker embellished with dancing peacocks, round ruby cabochons, emerald accents, and matching temple jhumkas.',
    fabric: '24K Matte Gold Micro-Plate over Fine Alloy',
    material: 'Antique Temple Gold, Ruby Kemp & Emerald Cabochons',
    colour: 'Temple Gold, Deep Ruby & Emerald',
    pairedProductId: 'prod-04', // Paired with Vaidhehi Maroon Kasavu Saree
    details: [
      'Featured in our signature bridal campaign across Kerala and South India',
      '2-piece suite: Statement Choker Necklace + Matching Jhumka Earrings',
      'Intricate openwork design inspired by centuries-old temple architecture',
      'Anti-tarnish electroplated seal for enduring heirloom longevity',
      'Direct WhatsApp bridal consultation available with the curators'
    ]
  },
  {
    id: 'prod-30',
    name: 'Samvrutha Complete Kasavu & Temple Jewellery Styling Set',
    category: 'bridal-sets',
    categoryName: 'Bridal Sets',
    price: 'Starting from ₹3,500',
    basePrice: 3500,
    badge: 'Complete Look Suite',
    images: [
      'assets/images/styling-kasavu-choker-collage.webp',
      'assets/images/saree-bridal-kasavu-maroon.webp',
      'assets/images/jewel-set-antique-ruby-choker.webp'
    ],
    description: 'Curated head-to-toe festive & bridal styling package: includes the pure Kasavu handloom silk saree, matching maroon brocade blouse, antique temple choker, temple jhumkas, and emerald glass bangle set.',
    fabric: 'Pure Kasavu Handloom Silk + Antique Gold Jewellery Suite',
    material: 'Pure Handloom Silk & Antique Matte Gold Jewellery Suite',
    colour: 'Ivory Gold, Deep Maroon & Temple Gold',
    pairedProductId: 'prod-02', // Paired with Roja Tissue Gold Saree
    details: [
      'Complete coordinated ensemble curated by The AD Collections stylists',
      'Includes: Saree (6.25m), Unstitched Blouse, Choker, Earrings & Bangles',
      'Takes the guesswork out of matching jewellery with traditional sarees',
      'Bespoke blouse customization and drape consultation included',
      'Delivered in luxury velvet bridal trunk with protective packaging'
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CATEGORIES, PRODUCTS };
}


// Price display helper supporting PRICE_MODE ('starting_from' or 'price_on_enquiry')
function getProductPriceDisplay(product) {
  const mode = (typeof window !== 'undefined' && window.PRICE_MODE) ? window.PRICE_MODE : 'starting_from';
  if (mode === 'price_on_enquiry') {
    return 'Price on enquiry';
  }
  if (product && product.basePrice) {
    return 'Starting from ₹' + Number(product.basePrice).toLocaleString('en-IN');
  }
  if (product && product.price) {
    return product.price;
  }
  return 'Price on enquiry';
}
