// lib/seo.config.ts

const metadata = {
    title: "Pastelería Damasco | Tortas Caseras en Cerro Placeres",
    description:
      "Pastelería artesanal en Cerro Placeres, Valparaíso. Tortas de mil hojas, kuchen y pasteles caseros con sabor a hogar. Encarga por WhatsApp o visítanos.",
    keywords:
      "pastelería, repostería, tortas, pasteles, dulces, kuchen, mil hojas, casero, Cerro Placeres, Valparaíso",
    authors: [{ name: "Pastelería Damasco", url: "https://einsoft.cl" }],
    creator: "Pastelería Damasco",
    publisher: "Pastelería Damasco",
    metadataBase: new URL("https://pasteleriadamasco.cl"),
    openGraph: {
      title: "Pastelería Damasco | Tortas Caseras en Cerro Placeres",
      description:
        "Descubre nuestra repostería artesanal: tortas de mil hojas, kuchen y dulces caseros en Cerro Placeres.",
      url: "https://pasteleriadamasco.cl",
      siteName: "Pastelería Damasco",
      images: [
        {
          url: "https://pasteleriadamasco.cl/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "Torta casera de mil hojas - Pastelería Damasco",
        },
      ],
      locale: "es_CL",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Pastelería Damasco | Tortas Caseras en Cerro Placeres",
      description:
        "Repostería con sabor a hogar en Cerro Placeres. Tortas, dulces y pasteles hechos con amor.",
      images: ["https://pasteleriadamasco.cl/og-image.jpg"],
    },
    other: {
      "msvalidate.01": "DC8B98D872378FDCB24B26EF9103DC7B",
    },
  };
  
  export default { metadata };