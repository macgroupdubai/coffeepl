import { useState } from "react";
import { Menu, X, Search } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom"; // ✅ useNavigate for logo click
import logo from "../../assets/logo.png";

// ✅ Updated Menu Order
type NavLinkItem = { name: string; to: string; badge?: string };
const mainNavLinks: NavLinkItem[] = [
  { name: "SHOP", to: "/shop" },
  { name: "DISCOUNTS", to: "/discounts", badge: "sale" },
  { name: "COFFEE", to: "/coffee" },
  { name: "MACHINE", to: "/machine" },
  { name: "RENTAL", to: "/rental" },
  // Subscriptions temporarily unlinked — route still lives at /subscription.
  // { name: "SUBSCRIPTIONS", to: "/subscription" },
  { name: "TRAINING", to: "/training" },
  { name: "WHOLESALE", to: "/wholesale" },
  { name: "CONTACT US", to: "/contacts" },
];

const Logo = () => {
  const navigate = useNavigate(); // ✅ for clicking logo to navigate home
  return (
    <div
      className="flex flex-col items-start leading-none p-4 md:p-0 cursor-pointer select-none"
      onClick={() => navigate("/")} // ✅ Go to home route on logo click
      style={{ userSelect: "none" }}
    >
      <img
        src={logo}
        alt="logo"
        className=" cursor-pointer"
        style={{ pointerEvents: "none", userSelect: "none",width: "5rem", height: "5rem" }}
      />
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const bgColor = "bg-BLACK";
  const textColor = "text-white";

  return (
    <nav className={`${bgColor} ${textColor} w-full shadow-lg py-5`}>
      <div className="navbar-container w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="relative flex justify-between items-center h-20" style={{ maxWidth: "1400px", margin: "0 auto" }}>
          {/* ✅ Logo (Navigates Home) - Left side */}
          <div className="flex-shrink-0 navbar-logo z-10">
            <Logo />
          </div>

          {/* ✅ Desktop NavLinks - Centered relative to viewport */}
          <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 items-center space-x-6 xl:space-x-8 navbar-menu-center">
            {mainNavLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.to}
                className={({ isActive }) =>
                  `flex items-center text-base font-semibold uppercase tracking-wider transition-colors duration-200 cursor-pointer whitespace-nowrap select-none ${
                    isActive ? "text-[#CD7F32]" : "text-CREAM_WHITE"
                  } hover:text-[#CD7F32]`
                }
                style={{ userSelect: "none" }}
              >
                {link.name}
                {link.badge && (
                  <span className="ml-1 inline-flex items-center align-super text-[10px] font-bold leading-none bg-red-600 text-white px-1.5 py-0.5 rounded">
                    {link.badge}
                  </span>
                )}
              </NavLink>
            ))}
          </div>

          {/* ✅ Icons - Right side (spaced so Contact Us doesn't overlap) */}
          <div className="flex items-center gap-4 flex-shrink-0 z-10 navbar-icons pl-8">
            <button
              className="hidden lg:block transition-colors duration-200 hover:text-[#CD7F32] cursor-pointer"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 transition-colors duration-200 hover:text-[#CD7F32] cursor-pointer"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Custom Styles for alignment */}
      <style>{`
        /* Align navbar container with hero content on large screens */
        @media (min-width: 1280px) {
          .navbar-container > div {
            margin-left: 2rem !important;
            margin-right: auto;
          }
        }
        
        /* Center menu relative to viewport on large screens, shifted slightly left */
        @media (min-width: 1280px) {
          .navbar-menu-center {
            position: absolute;
            left: calc(50vw - 80px);
            transform: translateX(-50%);
          }
        }
        
        /* Search icon pushed to the right with clear gap from Contact Us */
        @media (min-width: 1280px) {
          .navbar-container {
            position: relative;
          }
          
          .navbar-icons {
            position: absolute;
            right: 0;
            padding-right: 1.5rem;
          }
        }
        
        /* Menu stops before the search icon area */
        @media (min-width: 1280px) {
          .navbar-menu-center {
            max-width: calc(100vw - 280px);
          }
        }
      `}</style>

      {/* ✅ Mobile Menu */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } lg:hidden ${bgColor} absolute top-20 left-0 w-full z-[9999] shadow-xl p-4 transition-all duration-300 ease-in-out`}
        style={{ borderTop: isOpen ? "1px solid #374151" : "none" }}
      >
        <div className="flex flex-col space-y-2">
          {mainNavLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.to}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `flex items-center text-base font-semibold uppercase tracking-wider transition-colors duration-200 cursor-pointer select-none ${
                  isActive ? "text-[#CD7F32]" : "text-white"
                } hover:text-[#CD7F32]`
              }
              style={{ userSelect: "none" }}
            >
              {link.name}
              {link.badge && (
                <span className="ml-2 inline-flex items-center text-[10px] font-bold leading-none bg-red-600 text-white px-1.5 py-0.5 rounded">
                  {link.badge}
                </span>
              )}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
