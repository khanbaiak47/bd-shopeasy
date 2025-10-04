import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CategorySection } from "@/components/CategorySection";
import { ProductCard } from "@/components/ProductCard";
import { Card } from "@/components/ui/card";

// Import product images
import kitchenImg from "@/assets/kitchen-appliances.jpg";
import toysImg from "@/assets/toys.jpg";
import gamingImg from "@/assets/gaming.jpg";
import homeDecorImg from "@/assets/home-decor.jpg";
import fashionImg from "@/assets/fashion.jpg";
import electronicsImg from "@/assets/electronics.jpg";
import beautyImg from "@/assets/beauty.jpg";
import booksImg from "@/assets/books.jpg";

const Index = () => {
  const dealsOfTheDay = [
    { image: gamingImg, title: "Gaming Headset with RGB Lighting", price: "2,499", originalPrice: "4,999" },
    { image: electronicsImg, title: "Wireless Bluetooth Earbuds Pro", price: "1,899", originalPrice: "3,499" },
    { image: fashionImg, title: "Premium Cotton Hoodie - Black", price: "1,599", originalPrice: "2,999" },
    { image: homeDecorImg, title: "Modern Minimalist Wall Art Set", price: "899", originalPrice: "1,799" },
  ];

  const kitchenEssentials = [
    { image: kitchenImg, title: "Multi-Function Air Fryer 5L", price: "4,999", originalPrice: "7,999" },
    { image: kitchenImg, title: "Electric Pressure Cooker", price: "3,499", originalPrice: "5,499" },
    { image: kitchenImg, title: "Professional Blender 1500W", price: "2,999", originalPrice: "4,499" },
    { image: kitchenImg, title: "Stainless Steel Cookware Set", price: "5,999", originalPrice: "8,999" },
  ];

  const toysForKids = [
    { image: toysImg, title: "Educational Building Blocks Set", price: "799", originalPrice: "1,299" },
    { image: toysImg, title: "Plush Teddy Bear - Large", price: "599", originalPrice: "999" },
    { image: toysImg, title: "Remote Control Car - Racing Edition", price: "1,299", originalPrice: "2,199" },
    { image: toysImg, title: "Interactive Learning Tablet", price: "1,999", originalPrice: "2,999" },
  ];

  const fashionDeals = [
    { image: fashionImg, title: "Slim Fit Denim Jeans", price: "1,199", originalPrice: "2,199" },
    { image: fashionImg, title: "Casual Sneakers - White", price: "1,499", originalPrice: "2,499" },
    { image: fashionImg, title: "Cotton T-Shirt Pack of 3", price: "899", originalPrice: "1,499" },
    { image: fashionImg, title: "Winter Jacket - Waterproof", price: "2,999", originalPrice: "4,999" },
  ];

  const beautyProducts = [
    { image: beautyImg, title: "Anti-Aging Serum 30ml", price: "899", originalPrice: "1,499" },
    { image: beautyImg, title: "Hydrating Face Mask Set", price: "599", originalPrice: "999" },
    { image: beautyImg, title: "Professional Makeup Brush Set", price: "1,299", originalPrice: "1,999" },
    { image: beautyImg, title: "Organic Skincare Bundle", price: "1,999", originalPrice: "3,499" },
  ];

  const electronicsBestSellers = [
    { image: electronicsImg, title: "Smart Watch - Fitness Tracker", price: "2,999", originalPrice: "4,999" },
    { image: electronicsImg, title: "Wireless Mouse & Keyboard Combo", price: "1,499", originalPrice: "2,299" },
    { image: electronicsImg, title: "Portable Power Bank 20000mAh", price: "1,199", originalPrice: "1,899" },
    { image: electronicsImg, title: "USB-C Fast Charging Cable", price: "299", originalPrice: "599" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Banner */}
        <div className="bg-gradient-to-r from-primary to-accent text-white py-12 mb-6">
          <div className="max-w-[1500px] mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Welcome to BDShop
            </h1>
            <p className="text-xl md:text-2xl mb-6">
              Your One-Stop Shop for Everything in Bangladesh
            </p>
            <p className="text-lg opacity-90">
              Free Shipping on Orders Over ৳1000 | Cash on Delivery Available
            </p>
          </div>
        </div>

        <div className="max-w-[1500px] mx-auto px-4 space-y-6 pb-12">
          {/* Featured Categories */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow cursor-pointer bg-card">
              <div className="text-4xl mb-2">🎮</div>
              <h3 className="font-bold text-foreground">Gaming</h3>
              <p className="text-sm text-muted-foreground">Up to 50% off</p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow cursor-pointer bg-card">
              <div className="text-4xl mb-2">👕</div>
              <h3 className="font-bold text-foreground">Fashion</h3>
              <p className="text-sm text-muted-foreground">New arrivals</p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow cursor-pointer bg-card">
              <div className="text-4xl mb-2">📱</div>
              <h3 className="font-bold text-foreground">Electronics</h3>
              <p className="text-sm text-muted-foreground">Best deals</p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow cursor-pointer bg-card">
              <div className="text-4xl mb-2">🏠</div>
              <h3 className="font-bold text-foreground">Home & Living</h3>
              <p className="text-sm text-muted-foreground">Decor items</p>
            </Card>
          </div>

          {/* Deals of the Day */}
          <CategorySection 
            title="🔥 Today's Deals - Limited Time Offers"
            products={dealsOfTheDay}
            columns={4}
          />

          {/* Two columns layout */}
          <div className="grid md:grid-cols-2 gap-6">
            <CategorySection 
              title="🍳 Kitchen Essentials"
              products={kitchenEssentials.slice(0, 2)}
              columns={2}
            />
            <CategorySection 
              title="🧸 Toys for Little Ones"
              products={toysForKids.slice(0, 2)}
              columns={2}
            />
          </div>

          {/* Fashion Section */}
          <CategorySection 
            title="👔 Fashion & Clothing - Best Sellers"
            products={fashionDeals}
            columns={4}
          />

          {/* Beauty Products */}
          <CategorySection 
            title="💄 Beauty & Personal Care"
            products={beautyProducts}
            columns={4}
          />

          {/* Electronics Best Sellers */}
          <CategorySection 
            title="⚡ Electronics Best Sellers"
            products={electronicsBestSellers}
            columns={4}
          />

          {/* Books Section */}
          <Card className="p-6 bg-card">
            <h2 className="text-xl font-bold mb-4 text-foreground">📚 Trending Books</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <ProductCard
                  key={i}
                  image={booksImg}
                  title="Bestselling Novel - Must Read"
                  price="399"
                  originalPrice="699"
                />
              ))}
            </div>
          </Card>

          {/* Special Offer Banner */}
          <Card className="bg-gradient-to-r from-primary to-accent text-white p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">🎉 Special Offer!</h2>
            <p className="text-xl mb-4">Get 20% OFF on your first order</p>
            <p className="text-lg">Use code: <span className="font-bold bg-white text-primary px-3 py-1 rounded">WELCOME20</span></p>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
