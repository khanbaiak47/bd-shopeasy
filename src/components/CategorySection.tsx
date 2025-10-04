import { Card } from "@/components/ui/card";
import { ProductCard } from "./ProductCard";

interface Product {
  image: string;
  title: string;
  price: string;
  originalPrice?: string;
}

interface CategorySectionProps {
  title: string;
  products: Product[];
  columns?: 2 | 3 | 4;
}

export const CategorySection = ({ title, products, columns = 4 }: CategorySectionProps) => {
  const gridCols = {
    2: "grid-cols-2",
    3: "grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
  };

  return (
    <Card className="p-6 bg-card">
      <h2 className="text-xl font-bold mb-4 text-foreground">{title}</h2>
      <div className={`grid ${gridCols[columns]} gap-4`}>
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </Card>
  );
};
