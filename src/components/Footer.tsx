export const Footer = () => {
  return (
    <footer className="bg-[hsl(var(--header-bg))] text-white mt-12">
      <div className="max-w-[1500px] mx-auto px-4">
        {/* Back to top */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-full py-4 bg-[hsl(var(--header-dark))] hover:bg-opacity-80 transition-colors text-sm font-medium"
        >
          Back to top
        </button>

        {/* Links sections */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12">
          <div>
            <h3 className="font-bold mb-3">Get to Know Us</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Press Releases</a></li>
              <li><a href="#" className="hover:underline">BD Shop Science</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-3">Make Money with Us</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Sell on BDShop</a></li>
              <li><a href="#" className="hover:underline">Sell under Private Brands</a></li>
              <li><a href="#" className="hover:underline">Become an Affiliate</a></li>
              <li><a href="#" className="hover:underline">Advertise Your Products</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-3">Payment Products</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">BD Shop Business Card</a></li>
              <li><a href="#" className="hover:underline">Shop with Points</a></li>
              <li><a href="#" className="hover:underline">Reload Your Balance</a></li>
              <li><a href="#" className="hover:underline">Currency Converter</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-3">Let Us Help You</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Your Account</a></li>
              <li><a href="#" className="hover:underline">Your Orders</a></li>
              <li><a href="#" className="hover:underline">Shipping Rates & Policies</a></li>
              <li><a href="#" className="hover:underline">Returns & Replacements</a></li>
              <li><a href="#" className="hover:underline">Help</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-white/20 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
            <div className="text-xl font-bold">
              BD<span className="text-primary">Shop</span>
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:underline">Conditions of Use</a>
              <a href="#" className="hover:underline">Privacy Notice</a>
              <a href="#" className="hover:underline">Your Ads Privacy Choices</a>
            </div>
          </div>
          <div className="text-center mt-4 text-xs text-white/60">
            © 2025, BDShop.com, Inc. or its affiliates
          </div>
        </div>
      </div>
    </footer>
  );
};
