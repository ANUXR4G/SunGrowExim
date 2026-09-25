export const site = {
  name: "Sun Growexim",
  tagline: "Your Trusted Trading & Export Partner",
  description:
    "Delivering quality products globally with reliability, efficiency, and excellence in trade and export solutions.",
  email: "kiran@sungrowexim.com",
  phone: "+917378304050",
  phoneDisplay: "+91 73783 04050",
  address:
    "Office Add-Mogra, Plot No : A-2/2, Old MIDC satara - 415004, Maharashtra, India",
  logo: "/images/2025_03_WhatsApp-Image-2025-03-21-at-9.22.51-PM-1.png",
  social: {
    facebook: "https://www.facebook.com/",
    twitter: "https://twitter.com/",
    instagram: "https://www.instagram.com/",
  },
  whatsapp: "https://wa.me/917378304050",
} as const;

export type Product = {
  slug: string;
  title: string;
  shortTitle?: string;
  image: string;
  banner: string;
  excerpt: string;
  gallery?: string[];
  specs?: { label: string; value: string }[];
  sections?: { heading?: string; paragraphs: string[] }[];
  table?: { headers: string[]; rows: string[][] };
  children?: { title: string; href: string; image: string }[];
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  {
    label: "Products",
    href: "/products",
    children: [
      { label: "Mango Pulp", href: "/mango-pulp" },
      { label: "Semi Husked Coconut", href: "/semi-husked-coconut" },
      { label: "Indian Rice", href: "/indian-rice" },
      { label: "Indian Spices", href: "/indian-spices" },
    ],
  },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact Us", href: "/contact-us" },
] as const;

export const products: Product[] = [
  {
    slug: "mango-pulp",
    title: "Mango Pulp",
    image: "/images/2025_03_mango-pulp-1.jpg",
    banner: "/images/2025_03_mango-pulp-1.jpg",
    excerpt:
      "High-quality pure mango pulp from premium Alphonso and Totapuri varieties.",
    gallery: [
      "/images/2025_03_mango-pulp-1.jpg",
      "/images/2025_03_How-to-make-Mango-Juice-Main1.jpeg",
      "/images/2025_03_pngtree-fruit-mango-pulp-cut-mango-image_8588.jpg",
    ],
    sections: [
      {
        paragraphs: [
          "Mango is high in beta-carotene, a precursor of vitamin A, and is a rich source of the vitamin B complex. We supply high-quality pure mango pulp. We export mango pulp from two varieties of mangoes, as given below:",
        ],
      },
      {
        heading: "Alphonso Mango",
        paragraphs: [
          "Alphonso Mango is the most premium variety of mango and known for its full-bodied pulp, rich sweet flavor, and deep color of the fruit.",
        ],
      },
    ],
    table: {
      headers: ["Attribute", "Alphonso Mango", "Totapuri Mango"],
      rows: [
        [
          "Appearance",
          "Uniform, homogeneous, smooth, free from fibres and any foreign matter",
          "Uniform, homogeneous, smooth, free from fibers and any foreign matter",
        ],
        [
          "Aroma and Flavor",
          "Prominent aroma of natural ripe Alphonso Mangoes, free from any fermented & off-flavor, and scorched or caramelised flavor.",
          "Prominent aroma of natural ripe Totapuri Mango, free from any fermented & off-flavor and scorched or caramelised flavor.",
        ],
        [
          "Taste",
          "Typical sweet acidic taste of natural ripe Alphonso Mango.",
          "Typical sweet and sour acidic taste of natural ripe Totapuri Mango.",
        ],
        ["Color", "Golden yellow", "Bright Yellow, Green"],
        [
          "Physical Characteristics",
          "Brix @ 20°C: 16° Min · Acidity: 0.60 to 1.20 · pH @ 20°C: 3.60 to 4.20 · Consistency @ 20°C: 6 – 12 cm / 30 Sec (Bostwick)",
          "Similar premium pulp specifications for Totapuri variety",
        ],
      ],
    },
  },
  {
    slug: "semi-husked-coconut",
    title: "Semi Husked Coconut",
    image: "/images/2025_03_Semi-Husked-Coconut-Banner.jpg",
    banner: "/images/2025_03_Semi-Husked-Coconut-Banner.jpg",
    excerpt:
      "Fresh semi-husked coconuts packed from farms across southern India, available year-round.",
    gallery: [
      "/images/2025_03_coconut1.jpg",
      "/images/2025_03_coconut2.jpg",
      "/images/2025_03_coconut3.webp",
      "/images/2025_03_coconut4.webp",
      "/images/2025_03_coconut5.webp",
      "/images/2025_03_coconut6.jpg",
    ],
    specs: [
      { label: "Load ability of 20ft container", value: "950 bags" },
      { label: "Load ability of 40ft container", value: "1900/2000 bags" },
      { label: "Min. order quantity", value: "1000 bags per 20ft container" },
      {
        label: "Mode Of Payment Terms",
        value: "Advance payment / irrevocable L/C (with prime bank)",
      },
      { label: "Delivery Time", value: "5-10 days" },
      {
        label: "Availability",
        value:
          "Cultivated in various parts of southern India and available all around the year",
      },
    ],
    sections: [
      {
        heading: "Fresh Coconut Exporter – Sungrow Exim",
        paragraphs: [
          "We are one of the topmost Fresh Coconut exporters in India. We have been operating for many years and are dealing with a number of clients from various parts of the globe. Our services are unmatchable because of the excellence and the quality of our products.",
          "The coconuts provided by us are packed from farms directly. All types of coconuts are carefully selected, graded and packed to meet international quality standards for export markets.",
        ],
      },
    ],
  },
  {
    slug: "indian-rice",
    title: "Indian Rice",
    image: "/images/2025_03_Basumati-Rice-Banner.webp",
    banner: "/images/2025_03_Basumati-Rice-Banner.webp",
    excerpt:
      "Premium Basmati and Non-Basmati rice varieties exported with strict quality control.",
    children: [
      {
        title: "Basmati Rice",
        href: "/basmati-rice",
        image: "/images/2025_03_basumati-rice4.webp",
      },
      {
        title: "Non Basmati Rice",
        href: "/non-basmati-rice",
        image: "/images/2025_03_Non-Basumati-Rice1.jpeg",
      },
    ],
    sections: [
      {
        paragraphs: [
          "Sun Growexim is one of the Top Rice Exporters in India that offers high-end rice varieties at an affordable range. Rice is one of the most consumed staple foods worldwide, especially in regions like Africa and Asia.",
          "As Indian rice exporters, we prefer diverse rice types that never compromise on quality and maintain customer standards and requirements. Rice gets classified into two main groups; white rice and brown rice. However, several rice varieties exist, including Basmati, Matta and Non-basmati.",
        ],
      },
    ],
  },
  {
    slug: "indian-spices",
    title: "Indian Spices",
    image: "/images/2025_03_istockphoto-spices.jpg",
    banner: "/images/2025_03_img_1920x_banner.jpg",
    excerpt:
      "Fresh and dried ginger and other Indian spices sourced for global markets.",
    children: [
      {
        title: "Fresh Ginger",
        href: "/fresh-ginger",
        image: "/images/2025_03_Fresh-Ginger6.png",
      },
      {
        title: "Dried Ginger",
        href: "/dired-ginger",
        image: "/images/2025_03_Dired-Ginger5.jpg",
      },
    ],
    sections: [
      {
        paragraphs: [
          "India is renowned for its rich variety of spices. At Sun Growexim we source and export premium Indian spices including fresh and dried ginger, delivering authentic aroma, purity and consistent quality to buyers worldwide.",
        ],
      },
    ],
  },
  {
    slug: "potato",
    title: "Potato",
    image: "/images/2025_04_patato2.webp",
    banner: "/images/2025_04_patato2.webp",
    excerpt:
      "Organically cultivated yellow potatoes packed in mesh and jute bags.",
    gallery: [
      "/images/2025_04_patato1.webp",
      "/images/2025_04_patato2.webp",
      "/images/2025_04_patato3.webp",
      "/images/2025_04_patato4.jpeg",
      "/images/2025_04_patato5.jpg",
      "/images/2025_04_patato6.webp",
    ],
    sections: [
      {
        paragraphs: [
          "We export yellow potatoes in different sizes. Potato is known for its high carbohydrate content. We procure potatoes from well-known agriculturists and farmers. The potatoes are organically cultivated without the use of any harmful pesticides and chemicals. We take 5kg to 50 kg orders. We use mesh and jute bags to pack the potatoes. Our vegetables are wholesome, fresh and hygienically packed.",
        ],
      },
    ],
    specs: [
      { label: "Colour", value: "Yellow" },
      { label: "Weight", value: "50mm & Above" },
      { label: "Unit Price", value: "Per Ton" },
      { label: "Variety", value: "Small & Big size" },
      { label: "Shelf Life", value: "25 days from date of packing" },
      { label: "Packing", value: "5, 10, 25, 50 kg Mesh & Jute Bags" },
      { label: "Delivery Time", value: "7 to 10 Days" },
    ],
  },
  {
    slug: "millets",
    title: "Millets",
    image: "/images/2025_04_image-62391.png",
    banner: "/images/2025_04_Millets1.webp",
    excerpt:
      "Nutritious, gluten-free millets grown as rain-fed crops under marginal conditions.",
    gallery: [
      "/images/2025_04_Millets1.webp",
      "/images/2025_04_Millets2.jpg",
      "/images/2025_04_Millets3.webp",
      "/images/2025_04_Millets4.jpg",
      "/images/2025_04_Millets5.webp",
      "/images/2025_04_Millets6.webp",
    ],
    sections: [
      {
        paragraphs: [
          "Millets grow in dry zones as rain-fed crops and they are small-seeded and harder. They have the capability of cultivating under marginal conditions of soil fertility and moisture. Millets also are an important ingredient of the prehistoric diet in Indian, Chinese and Korean societies.",
          "Millets are one of the oldest foods known to humans and possibly the first cereal grain to be used for domestic purposes.",
        ],
      },
      {
        heading: "Health benefits",
        paragraphs: [
          "Millets are highly nutritious, non-glutinous and non-acid forming food. Since they are easy to digest they are considered to be the least allergenic and most digestible grains available compared to rice, especially polished rice.",
          "Millets release lesser percentage of glucose and over a longer period of time. Millets are particularly high in minerals like iron, magnesium, phosphorus and potassium.",
        ],
      },
    ],
  },
  {
    slug: "basmati-rice",
    title: "Basmati Rice",
    image: "/images/2025_03_basumati-rice4.webp",
    banner: "/images/2025_03_Basumati-Rice-Banner.webp",
    excerpt:
      "Extra-long, superfine slender Basmati grains with sweet taste and great aroma.",
    gallery: [
      "/images/2025_03_basumati-rice1.jpg",
      "/images/2025_03_basumati-rice2.jpg",
      "/images/2025_03_basumati-rice3.webp",
      "/images/2025_03_basumati-rice4.webp",
      "/images/2025_03_basumati-rice5.webp",
      "/images/2025_03_basumati-rice6.jpg",
    ],
    sections: [
      {
        heading: "Indian Rice",
        paragraphs: [
          "Sun Growexim is one of the Top Rice Exporters in India that offers high-end rice varieties at an affordable range. Rice is one of the most consumed staple foods worldwide, especially in regions like Africa and Asia.",
        ],
      },
      {
        heading: "Basmati Rice",
        paragraphs: [
          "Basmati rice we supply is extra-long, superfine slender grains having a length to breadth ratio greater than 4.3mm. It has sweet taste, great aroma, soft texture and a delicate curve. The Indian basmati rice elongates least breadth-wise on cooking.",
          "The rice we export is free from any kind of impurity and foreign matter. It is available in fine packs that are resistant to moisture and can successfully retain the aroma for a reasonable time period. This variety of rice is grown in North India.",
          "Our company has high-tech packaging machinery for multiple packaging and delivers various options from 1Kg to 50Kg and customized according to our client's needs.",
        ],
      },
    ],
  },
  {
    slug: "non-basmati-rice",
    title: "Non Basmati Rice",
    image: "/images/2025_03_Non-Basumati-Rice1.jpeg",
    banner: "/images/2025_03_Non-Basumati-Rice-Banner.webp",
    excerpt:
      "Superior quality non-basmati and parboiled rice free from dust, germs and stones.",
    gallery: [
      "/images/2025_03_Non-Basumati-Rice1.jpeg",
      "/images/2025_03_Non-Basumati-Rice2.jpg",
      "/images/2025_03_Non-Basumati-Rice3.jpg",
      "/images/2025_03_Non-Basumati-Rice4.jpg",
      "/images/2025_03_Non-Basumati-Rice5.webp",
      "/images/2025_03_Non-Basumati-Rice6.jpg",
    ],
    sections: [
      {
        paragraphs: [
          "The Non-Basmati Rice from Sungrow Exim is of superior quality and is free from dust, germs and stones. It has a rich taste and fine aroma. Non-basmati rice comes in different sizes, some are long and slender, some are short and thick, some are like beads, and some may be round.",
          "The rice bags are available in a variety of packing such as poly pack, jute bag, cotton bag, paper bag and non-woven fabric bag in various sizes like 50 kg, 45 kg, 40 kg, 30 kg, 25 kg, 20 kg, 10 kg and 5 kg and also as per buyer requirement.",
          "We also supply parboiled rice. Parboiled rice has a brown grain. The grains are less brittle. This type of rice is mostly consumed by the people of West Africa.",
        ],
      },
      {
        heading: "Parboiled rice varieties we export",
        paragraphs: [
          "Tanjore Ponni · Sona Masuri – Raw / Steam · Long Grain Rice · Idly Rice – and more grades as per buyer requirement.",
        ],
      },
    ],
  },
  {
    slug: "fresh-ginger",
    title: "Fresh Ginger",
    image: "/images/2025_03_Fresh-Ginger6.png",
    banner: "/images/2025_03_Fresh-Ginger6.png",
    excerpt:
      "Aromatic fresh ginger freshly plucked and packed in tamper-proof packaging.",
    gallery: [
      "/images/2025_03_Fresh-Ginger1.jpg",
      "/images/2025_03_Fresh-Ginger3.webp",
      "/images/2025_03_Fresh-Ginger4.jpg",
      "/images/2025_03_Fresh-Ginger5.jpeg",
      "/images/2025_03_Fresh-Ginger6.png",
    ],
    sections: [
      {
        paragraphs: [
          "Fresh ginger is known for its aromatic, spicy and pungent flavour. It has a special flavour and enhances the taste of many dishes. It is popularly used in Indian and Asian cuisines. Ginger is known for its healing properties. It facilitates digestion. It clears a sore throat and nose congestion.",
          "Our variety of ginger is freshly plucked and packed in tamper proof packaging to prevent degradation.",
        ],
      },
    ],
    specs: [
      { label: "India origin", value: "February & March" },
      { label: "Nigeria Origin", value: "October & November" },
      {
        label: "Packing",
        value: "25 kgs jute bags OR as per buyer's requirement",
      },
    ],
  },
  {
    slug: "dired-ginger",
    title: "Dried Ginger",
    image: "/images/2025_03_Dired-Ginger5.jpg",
    banner: "/images/2025_03_Dired-Ginger-Banner.webp",
    excerpt:
      "Sun-dried ginger packed in jute bags, available as brown or white ginger.",
    gallery: [
      "/images/2025_03_Dired-Ginger1.jpg",
      "/images/2025_03_Dired-Ginger2.jpg",
      "/images/2025_03_Dired-Ginger3.png",
      "/images/2025_03_Dired-Ginger4.jpg",
      "/images/2025_03_Dired-Ginger5.jpg",
      "/images/2025_03_Dired-Ginger6.webp",
    ],
    sections: [
      {
        paragraphs: [
          "When fresh ginger is sun-dried it becomes dry ginger. Dried ginger is powdered and used in gravies, marinades and tea. Ginger is known for its medicinal properties.",
          "If ginger is unpeeled and then dried, it is called brown ginger. As opposed to this, if it is peeled and dried, then it is called white ginger. We pack the ginger in jute bags. We can also customise the packing on buyer request.",
          "Dried Ginger is nothing but fresh ginger which undergoes a drying process before being used. The fresh rhizomes are soaked in water overnight after which the outer peel is carefully removed using a knife or a peeler. They are washed again and then sun dried on mats or barbecues for around a week. During this period, they are turned periodically. The end result is a pale white dried ginger.",
        ],
      },
    ],
  },
];

export const homeProducts = products.filter((p) =>
  [
    "mango-pulp",
    "semi-husked-coconut",
    "indian-rice",
    "indian-spices",
    "potato",
    "millets",
  ].includes(p.slug),
);

export const whyChooseUs = [
  {
    title: "Increased Revenue & Market Expansion",
    text: "Exporting allows businesses to tap into international markets, increasing their customer base and boosting sales beyond domestic limitations.",
    icon: "globe" as const,
  },
  {
    title: "Diversification & Risk Reduction",
    text: "By selling in multiple markets, companies reduce dependence on a single economy, making them less vulnerable to local market fluctuations.",
    icon: "shield" as const,
  },
  {
    title: "Competitive Advantage & Brand Growth",
    text: "Competing in global markets enhances a company's reputation, encourages innovation, and can lead to economies of scale, lowering production costs.",
    icon: "award" as const,
  },
];

export const testimonials = [
  {
    name: "Emily Johnson",
    quote:
      "Sun Growexim has been a trusted partner for our agricultural exports. Their high-quality fresh produce and efficient logistics have helped us expand our business overseas. Highly recommended for anyone looking for reliable export services!",
  },
  {
    name: "Michael Smith",
    quote:
      "We have been sourcing spices from Sun Growexim for the past two years. Their commitment to quality and timely delivery is unmatched. The team is professional and always ready to assist with documentation and customs clearance.",
  },
  {
    name: "Jessica Brown",
    quote:
      "Sun Growexim has made the export process seamless for us. Their expertise in international trade, along with top-notch packaging and product quality, has given us an edge in the global market. Looking forward to a long-term partnership!",
  },
  {
    name: "David Williams",
    quote:
      "From fresh fruits to organic pulses, Sun Growexim has delivered excellence in every shipment. Their attention to detail and customer service make them a preferred export partner. Highly satisfied with their services!",
  },
];

export const galleryImages = [
  {
    src: "/images/2025_03_Fresh-Ginger6.png",
    alt: "Fresh Ginger",
  },
  {
    src: "/images/2025_03_Dired-Ginger5.jpg",
    alt: "Dried Ginger",
  },
  {
    src: "/images/2025_03_Non-Basumati-Rice1.jpeg",
    alt: "Non Basmati Rice",
  },
  {
    src: "/images/2025_03_basumati-rice4.webp",
    alt: "Basmati Rice",
  },
  {
    src: "/images/2025_03_coconut3.webp",
    alt: "Semi Husked Coconut",
  },
  {
    src: "/images/2025_03_istockphoto-spices.jpg",
    alt: "Indian Spices",
  },
];

export const certificates = [
  {
    title: "IEC Certificate",
    image: "/certificates/iec.png",
    pdf: "/certificates/2025_03_SUN-GROWEXIM-CERTIFICATE-Of-IEC.pdf",
  },
  {
    title: "RCMC Certificate",
    image: "/certificates/rcmc.png",
    pdf: "/certificates/2025_03_Registration-cum-Membership-Certificate.pdf",
  },
];

export const aboutContent = {
  title: "Welcome To Sun Growexim",
  paragraphs: [
    "Sun Growexim is Trader & Exporter, engaged in Exporting a wide range of products Like Basmati Rice, Tea, Agri Food Products, Organic products, Spices, Pulse, turmeric, Fruits, Vegetables, Coconut, dry fruits. We provide superior quality products which are widely accepted by our clients at a reasonable price.",
    "Our primary focus is to provide cost-effective & also the best standard quality products to our overseas clients.",
    "Welcome to Sun Growexim a trusted merchant exporter from India. We specialize in sourcing and supplying high-quality mango pulp, spices, agricultural products to global markets. With a strong network of reliable suppliers and a commitment to excellence, we ensure that our products meet international standards of quality and freshness.",
    "Our mission is to bridge the gap between Indian producers and buyers worldwide by providing premium products at competitive prices. At Sun Growexim customer satisfaction is our top priority. We believe in building long-term relationships through transparency, reliability, and efficient service. Whether you’re looking for bulk orders or customized solutions, we are here to cater to your needs. Let’s connect and grow together!",
  ],
  image: "/images/2025_03_wmremove-transformed.jpeg",
};

export const heroSlides = [
  {
    image: "/images/2025_03_slider1.jpg",
    eyebrow: "Welcome To",
    title: "Sun Growexim – Your Trusted Trading & Export Partner",
    text: site.description,
  },
  {
    image: "/images/2025_03_slider2.webp",
    eyebrow: "Welcome To",
    title: "Sun Growexim – Your Trusted Trading & Export Partner",
    text: site.description,
  },
  {
    image: "/images/2025_03_wmremove-transformed.jpeg",
    eyebrow: "Welcome To",
    title: "Sun Growexim – Your Trusted Trading & Export Partner",
    text: site.description,
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}
