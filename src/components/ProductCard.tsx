import { Card } from "@/components/ui/card";

interface ProductCardProps {
  image: string;
  title: string;
  price: string;
  originalPrice?: string;
  rating?: number;
  reviews?: number;
}

export const ProductCard = ({ 
  image, 
  title, 
  price, 
  originalPrice,
  rating = 4.5,
  reviews = 100
}: ProductCardProps) => {
  const discount = originalPrice 
    ? Math.round((1 - parseFloat(price) / parseFloat(originalPrice)) * 100)
    : 0;

  return (
    <Card className="group cursor-pointer overflow-hidden border-border hover:shadow-lg transition-all duration-300 bg-card">
      <div className="aspect-square relative overflow-hidden bg-muted">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {discount > 0 && (
          <div className="absolute top-2 left-2 bg-[hsl(var(--discount-bg))] text-white px-2 py-1 rounded text-xs font-bold">
            -{discount}%
          </div>
        )}
      </div>
      <div className="p-3">
        <h3 className="text-sm line-clamp-2 mb-2 text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        <div className="flex items-baseline gap-2 mb-1">
          <span className="text-lg font-bold text-[hsl(var(--price-color))]">৳{price}</span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">৳{originalPrice}</span>
          )}
        </div>
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <div className="flex text-accent">
            {"★".repeat(Math.floor(rating))}
            {"☆".repeat(5 - Math.floor(rating))}
          </div>
          <span>({reviews})</span>
        </div>
      </div>
    </Card>
  );
};
