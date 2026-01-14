interface RecipeSchemaProps {
  foodName: string;
  description: string;
  wineRecommendations: string[];
  category: string;
}

export function RecipeSchema(props: RecipeSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Recipe",
    name: `Wine Pairing for ${props.foodName}`,
    description: props.description,
    recipeCategory: props.category,
    keywords: `wine pairing, ${props.foodName}, wine recommendation`,
    recipeInstructions: [
      {
        "@type": "HowToStep",
        text: `Prepare ${props.foodName} according to your recipe`,
      },
      {
        "@type": "HowToStep",
        text: `Serve with ${props.wineRecommendations.join(" or ")}`,
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.7",
      ratingCount: "89",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
