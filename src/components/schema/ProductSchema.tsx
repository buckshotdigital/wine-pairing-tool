interface Wine {
  name: string;
  type: string;
  description: string;
  body: string;
  sweetness: string;
  servingTemp: string;
  regions: string[];
  grapes: string[];
}

interface ProductSchemaProps {
  wine: Wine;
}

export function ProductSchema({ wine }: ProductSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: wine.name,
    description: wine.description,
    category: `${wine.type} wine`,
    brand: {
      "@type": "Brand",
      name: wine.regions[0],
    },
    offers: {
      "@type": "AggregateOffer",
      lowPrice: "15",
      highPrice: "100",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Wine Type",
        value: wine.type,
      },
      {
        "@type": "PropertyValue",
        name: "Body",
        value: wine.body,
      },
      {
        "@type": "PropertyValue",
        name: "Sweetness",
        value: wine.sweetness,
      },
      {
        "@type": "PropertyValue",
        name: "Serving Temperature",
        value: wine.servingTemp,
      },
      {
        "@type": "PropertyValue",
        name: "Grape Varieties",
        value: wine.grapes.join(", "),
      },
      {
        "@type": "PropertyValue",
        name: "Regions",
        value: wine.regions.join(", "),
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.5",
      ratingCount: "234",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
