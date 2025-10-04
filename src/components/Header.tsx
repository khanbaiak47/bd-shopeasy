import { ShoppingCart, Search, MapPin, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50">
      {/* Top header */}
      <div className="bg-[hsl(var(--header-dark))] text-white">
        <div className="max-w-[1500px] mx-auto px-4 py-2 flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold">
              BD<span className="text-primary">Shop</span>
            </div>
          </div>

          {/* Location */}
          <button className="hidden md:flex items-center gap-1 hover:opacity-80 transition-opacity">
            <MapPin className="h-5 w-5" />
            <div className="text-left">
              <div className="text-xs">Deliver to</div>
              <div className="text-sm font-bold">Bangladesh</div>
            </div>
          </button>

          {/* Search */}
          <div className="flex-1 max-w-3xl">
            <div className="relative flex">
              <Input
                placeholder="Search products..."
                className="rounded-r-none border-0 focus-visible:ring-0 h-10"
              />
              <Button 
                variant="secondary" 
                className="rounded-l-none px-6 h-10"
              >
                <Search className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Right section */}
          <div className="flex items-center gap-4">
            <button className="hidden md:block hover:opacity-80 transition-opacity">
              <div className="text-xs">Hello, Sign in</div>
              <div className="text-sm font-bold">Account & Lists</div>
            </button>
            
            <button className="hidden md:block hover:opacity-80 transition-opacity">
              <div className="text-xs">Returns</div>
              <div className="text-sm font-bold">& Orders</div>
            </button>

            <button className="flex items-center gap-1 hover:opacity-80 transition-opacity relative">
              <ShoppingCart className="h-8 w-8" />
              <span className="absolute -top-1 -right-1 bg-accent text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                0
              </span>
              <span className="hidden md:inline text-sm font-bold">Cart</span>
            </button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-[hsl(var(--header-bg))] text-white">
        <div className="max-w-[1500px] mx-auto px-4 py-2">
          <nav className="flex items-center gap-6 text-sm">
            <button className="flex items-center gap-1 hover:opacity-80 transition-opacity">
              <Menu className="h-5 w-5" />
              <span className="font-bold">All</span>
            </button>
            <a href="#" className="hover:opacity-80 transition-opacity">Today's Deals</a>
            <a href="#" className="hover:opacity-80 transition-opacity">Customer Service</a>
            <a href="#" className="hover:opacity-80 transition-opacity">Registry</a>
            <a href="#" className="hover:opacity-80 transition-opacity">Gift Cards</a>
            <a href="#" className="hover:opacity-80 transition-opacity">Sell</a>
          </nav>
        </div>
      </div>
    </header>
  );
};
