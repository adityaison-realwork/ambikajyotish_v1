import { ServiceItem, PujaCategory, VastuItem } from './types';

// Images - placeholders used to simulate the user's request. 
// Ideally PANDIT_IMAGE should be a PNG with transparent background for the layered effect.
export const HERO_IMAGE = "https://images.unsplash.com/photo-1600609842388-3e4b7c8d9638?q=80&w=2500&auto=format&fit=crop"; // Abstract Divine/Fire/Puja
// Using a placeholder that looks like a person cutout for the "layered" effect simulation
export const PANDIT_IMAGE = "https://png.pngtree.com/png-vector/20230918/ourmid/pngtree-indian-priest-png-image_10134484.png"; 

export const CONTACT_INFO = {
  phone: "+91 98XXX XXXXX",
  whatsapp: "+91 99XXX XXXXX",
  email: "contact@ambikajyotish.com",
  address: "Ambika Jyotish Kendra, C/O Pandit Anil Kumar Vyas, Near Nyay Mandir, Vadodara, Gujarat - 390001",
};

export const ASTRO_SERVICES: ServiceItem[] = [
  {
    name: "Sampurna Kundali Vishleshan",
    description: "Comprehensive analysis of 12 houses. Covers Career, Finance, Health, Marriage, and Children. Includes D-9 (Navamsa) & D-10 charts.",
    duration: "60 Mins",
    price: "₹1,500"
  },
  {
    name: "Varshphal (Yearly Report)",
    description: "A detailed roadmap for the upcoming 12 months based on the Solar Return Chart (Tajik Shastra).",
    duration: "45 Mins",
    price: "₹1,100"
  },
  {
    name: "Vivah Milan (Match Making)",
    description: "Beyond just Gun-Milan. We check Nadi Dosh, Bhakoot Dosh, Manglik status, and mental compatibility. Verdict: Yes/No/Remedial.",
    duration: "Report",
    price: "₹701"
  },
  {
    name: "Career & Business Consult",
    description: "\"Job or Business?\" \"When will I get promoted?\" \"Is this partnership lucky?\" Specific analysis of the 10th House.",
    duration: "30 Mins",
    price: "₹900"
  },
  {
    name: "Child/Education Consult",
    description: "Guidance on stream selection (Science/Commerce/Arts), concentration issues, and foreign study prospects.",
    duration: "30 Mins",
    price: "₹800"
  },
  {
    name: "Prashna Jyotish (Horary)",
    description: "For those without birth details. Ask 1 specific question (e.g., \"Where is my lost ring?\" \"Will I win this court case?\").",
    duration: "15 Mins",
    price: "₹500"
  },
  {
    name: "Muhurat Calculation",
    description: "Finding the most auspicious time for Marriage, Griha Pravesh, Shop Opening, or C-Section Delivery.",
    duration: "Report",
    price: "₹500"
  }
];

export const PUJA_CATEGORIES: PujaCategory[] = [
  {
    title: "Dosha Nivaran (Remedial Pujas)",
    description: "Essential for removing planetary blockages.",
    items: [
      {
        name: "Kaal Sarp Dosh Nivaran",
        whoNeedsIt: "Frequent failures, snake dreams, no savings, sudden health issues.",
        vidhi: "Ganpati Pujan, Rahu-Ketu Jaap (18,000), Naag-Naagin Visarjan, Havan.",
        priceStandard: "₹2,500",
        pricePremium: "₹5,100",
        priceExtra: "Maha-Anushthan (3 Days): ₹21,000"
      },
      {
        name: "Mangal Dosh Shanti",
        whoNeedsIt: "'Manglik' individuals facing marriage delays or divorce threats.",
        vidhi: "Kumbh Vivah (for females) or Ark Vivah (for males) to nullify the dosha.",
        priceStandard: "₹3,100",
        pricePremium: "₹6,500"
      },
      {
        name: "Pitra Dosh Nivaran",
        whoNeedsIt: "Pattern of unhappiness, lack of male progeny, constant family fights.",
        vidhi: "Pind Daan, Vishnu Tarpan, Narayan Bali Havan. Performed ideally at river banks.",
        pricePremium: "₹7,500 (Includes Brahmin Bhojan Dakshina)"
      },
      {
        name: "Chandal Dosh / Gandmool Shanti",
        whoNeedsIt: "Born in specific Nakshatras (Ashwini, Revati, etc.) or Guru-Rahu conjunction.",
        vidhi: "Nakshatra Shanti Havan using water from 27 different places (symbolic).",
        pricePremium: "₹5,100"
      }
    ]
  },
  {
    title: "Wealth & Prosperity (Lakshmi Pujas)",
    description: "For business growth and financial stability.",
    items: [
      {
        name: "Shree Yantra Sthapana & Puja",
        whoNeedsIt: "Attracting abundance through ultimate geometry.",
        vidhi: "Prana-Pratistha of Meru Shree Yantra with Kumkum Archana (1008 names).",
        priceStandard: "₹3,500 (Excl. Yantra cost)"
      },
      {
        name: "Vyapar Vridhi Havan",
        whoNeedsIt: "Removes 'Nazar' (Evil Eye) from business premises and boosts sales.",
        vidhi: "Lakshmi-Ganesh Havan + Kanakdhara Stotra Recitation.",
        priceStandard: "₹5,100"
      },
      {
        name: "Kuber Mantra Jaap",
        whoNeedsIt: "Unlocking blocked money and clearing debts.",
        vidhi: "1.25 Lakh Jaap of Lord Kuber (The Treasurer of Gods).",
        priceStandard: "Call for Quote"
      }
    ]
  },
  {
    title: "Health & Protection (Raksha Pujas)",
    description: "For critical illness, accidents, and legal enemies.",
    items: [
      {
        name: "Mahamrityunjaya Anushthan",
        whoNeedsIt: "For avoiding untimely death (Akaal Mrityu) and curing terminal illnesses.",
        vidhi: "Laghu (21k Jaap) or Maha (1.25L Jaap).",
        priceStandard: "₹11,000 (Laghu)",
        priceExtra: "₹51,000 (Maha - 7 Days)"
      },
      {
        name: "Baglamukhi Puja (Shatru Nashak)",
        whoNeedsIt: "Victory in court cases, politics, and silencing enemies.",
        vidhi: "Use of Turmeric (Haldi) rosary and Yellow flowers. Strictly Tantrokt Vidhi.",
        priceStandard: "₹21,000"
      },
      {
        name: "Rudrabhishek",
        whoNeedsIt: "General well-being and peace.",
        vidhi: "Jal (Water), Dudh (Milk), Ghee, or Laghu Rudri.",
        priceStandard: "Starts from ₹2,100"
      }
    ]
  }
];

export const VASTU_SERVICES: VastuItem[] = [
  {
    service: "Residential Vastu",
    scope: "Apartment/Flat/Bungalow analysis.",
    deliverables: "Map marking + Remedy List",
    price: "₹2,500 (Up to 1500 sq ft)"
  },
  {
    service: "Commercial Vastu",
    scope: "Shop/Office/Showroom. Focus on Cash box and Owner seating.",
    deliverables: "Layout Correction + Yantra placement",
    price: "₹5,100"
  },
  {
    service: "Industrial Vastu",
    scope: "Factories/Warehouses. Focus on Machinery placement and Raw material flow.",
    deliverables: "Detailed Report",
    price: "₹11,000"
  },
  {
    service: "Plot Selection",
    scope: "Visiting a potential land site to check soil energy and direction.",
    deliverables: "Buy/No-Buy Verdict",
    price: "₹2,100 / visit"
  }
];