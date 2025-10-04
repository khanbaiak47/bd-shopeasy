import { ShoppingCart, Search, MapPin, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log("Searching for:", searchQuery);
      // Add your search logic here
    }
  };

  const categories = [
    { name: "Today's Deals", href: "#deals" },
    { name: "Customer Service", href: "#service" },
    { name: "Registry", href: "#registry" },
    { name: "Gift Cards", href: "#giftcards" },
    { name: "Sell", href: "#sell" },
  ];

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
          <form onSubmit={handleSearch} className="flex-1 max-w-3xl">
            <div className="relative flex">
              <Input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                className="rounded-r-none border-0 focus-visible:ring-0 h-10"
              />
              <Button 
                type="submit"
                variant="secondary" 
                className="rounded-l-none px-6 h-10"
              >
                <Search className="h-5 w-5" />
              </Button>
            </div>
          </form>

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
            {/* Mobile Menu */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <button className="flex items-center gap-1 hover:opacity-80 transition-opacity">
                  <Menu className="h-5 w-5" />
                  <span className="font-bold">All</span>
                </button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle>Categories</SheetTitle>
                </SheetHeader>
                <div className="mt-6 flex flex-col gap-4">
                  {categories.map((category) => (
                    <a
                      key={category.name}
                      href={category.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-lg hover:text-primary transition-colors py-2 border-b"
                    >
                      {category.name}
                    </a>
                  ))}
                </div>
              </SheetContent>
            </Sheet>

            {/* Desktop Navigation */}
            {categories.map((category) => (
              <a
                key={category.name}
                href={category.href}
                className="hidden md:block hover:opacity-80 transition-opacity"
              >
                {category.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};
