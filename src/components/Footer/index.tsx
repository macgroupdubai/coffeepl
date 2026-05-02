import {
  Facebook,
  Instagram,
  X,
  Linkedin,
  Youtube,
  ArrowUp,
  ShoppingCart,
} from "lucide-react";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-COFFEE_BEAN_BROWN text-[#e0e0e0] py-16 px-4 sm:px-8 lg:px-24 relative">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* 1️⃣ Logo + About */}
        <div className="flex flex-col items-start text-left gap-4 md:-mt-4 lg:-mt-6">
          <img
            src={logo}
            alt="CoffeePL Logo"
            className="h-40 w-32 object-contain"
          />
          <p className="text-sm leading-relaxed text-[#d8d8d8] max-w-sm">
            At CoffeePL, we bring passion and perfection to every cup. From premium beans to professional-grade equipment, we are your trusted partner for great coffee moments.
          </p>
        </div>

        {/* 2️⃣ Explore */}
        <div>
          <h4 className="text-white font-bold text-lg mb-4">EXPLORE</h4>
          <ul className="space-y-2">
            {[
              { label: "Shop", href: "/shop" },
              { label: "Coffee", href: "/coffee" },
              { label: "Machine", href: "/machine" },
              { label: "Read our Blog", href: "#" },
              { label: "FAQ's", href: "#" },
            ].map((item, idx) => (
              <li key={idx}>
                <a
                  href={item.href}
                  className="hover:text-white transition-colors duration-200"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* 3️⃣ Contact Us */}
        <div>
          <h4 className="text-white font-bold text-lg mb-4">CONTACT US</h4>
          <div className="space-y-4 text-sm">
            <div>
              <p className="font-semibold text-white">Phone</p>
              <p>+971 55 441 0816</p>
            </div>
            <div>
              <p className="font-semibold text-white">Location</p>
              <p>
                International City, Morocco Cluster, l12 Building Dubai, United
                Arab Emirates.
              </p>
            </div>
            <div>
              <p className="font-semibold text-white">Commercial Orders</p>
              <a
                href="mailto:info@coffeepl.com"
                className="hover:text-white transition-colors duration-200"
              >
                info@coffeepl.com
              </a>
            </div>
          </div>
        </div>

        {/* 4️⃣ Read Our Terms */}
        <div>
          <h4 className="text-white font-bold text-lg mb-4">READ OUR TERMS</h4>
          <ul className="space-y-2">
            {[
              "Privacy Policy",
              "Returns & Refunds",
              "Terms & Conditions",
              "Shipping Policy",
            ].map((item, idx) => (
              <li key={idx}>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-16 pt-8 border-t border-[#666] flex flex-col sm:flex-row items-center justify-between">
        <p className="text-sm text-[#a0a0a0] order-2 sm:order-1 mt-4 sm:mt-0">
          © 2025 CoffeePL® Coffee Company LLC. All rights reserved
        </p>

        <div className="flex flex-col sm:flex-row items-center order-1 sm:order-2 space-y-4 sm:space-y-0 sm:space-x-8">
          {/* Social Icons */}
          <div className="flex space-x-4">
            {[Facebook, Instagram, X, Linkedin, Youtube].map((Icon, idx) => (
              <a key={idx} href="#" aria-label="Social Link">
                <Icon
                  size={22}
                  className="text-white/80 hover:text-white transition-colors duration-200"
                />
              </a>
            ))}
          </div>

          {/* Payment Icons */}
          <div className="flex items-center space-x-2">
            {[
              "https://img.icons8.com/color/48/000000/google-pay.png",
              "https://img.icons8.com/color/48/000000/apple-pay.png",
              "https://img.icons8.com/color/48/000000/amex.png",
              "https://img.icons8.com/color/48/000000/visa.png",
            ].map((src, idx) => (
              <span key={idx} className="bg-white p-1 rounded">
                <img src={src} alt="Payment" className="h-5 w-auto" />
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Buttons */}
      <div className="fixed bottom-8 right-8 flex flex-col space-y-4 z-50">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="bg-COFFEE_BEAN_BROWN text-white p-4 rounded-full shadow-lg hover:bg-[#6b3a35] transition-colors"
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} color="white" />
        </button>
        <button
          className="bg-COFFEE_BEAN_BROWN text-white p-4 rounded-full shadow-lg hover:bg-[#6b3a35] transition-colors"
          aria-label="Shopping cart"
        >
          <ShoppingCart size={24} color="white" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
