import { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import bannerImage from "../assets/subscriptionBanner.png";
import MSubscriptionBanner from "../assets/m-subscriptionBanner.png";
import Footer from "../components/Footer";
import Machine1 from "../assets/machine1.png";
import product1 from "../assets/100arabica.png";
import product2 from "../assets/30arabica.png";
import machine2 from "../assets/machine2.png";


const Subscription = () => {
  const desktopContentRef = useRef<HTMLDivElement>(null);
  const mobileContentRef = useRef<HTMLDivElement>(null);

  const bannerData = {
    title: "SUBSCRIPTIONS",
    titleFormatted: "<b>SUBSCRIPTIONS</b>",
    description: "Enjoy freshly roasted premium coffee delivered to your doorstep every month. Our subscription plans offer convenience and exclusive benefits for regular buyers.",
  };

  const animateContent = (element: HTMLElement | null) => {
    if (element) {
      element.style.opacity = "0";
      element.style.transform = "translateY(30px)";
      requestAnimationFrame(() => {
        setTimeout(() => {
          if (element) {
            element.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
            element.style.opacity = "1";
            element.style.transform = "translateY(0)";
          }
        }, 50);
      });
    }
  };

  useEffect(() => {
    // Animate content on mount
    const timer = setTimeout(() => {
      animateContent(desktopContentRef.current);
      animateContent(mobileContentRef.current);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Navbar />
      <div className="bg-white text-white min-h-screen">
        {/* === Banner Section === */}
        <section className="relative w-full overflow-hidden">
          {/* Desktop/Tablet Layout - Image with overlay text */}
          <div
            className="hidden md:block relative w-full"
            style={{
              aspectRatio: "2.63 / 1",
              minHeight: "450px",
            }}
          >
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full overflow-hidden">
              <img
                src={bannerImage}
                alt="Subscriptions"
                className="w-full h-full object-cover object-center"
                loading="eager"
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            </div>

            {/* Content Wrapper - Top Left Positioned, adjusted to fit colored space */}
            <div className="relative z-10 h-full flex items-start justify-start">
              <div className="w-full h-full">
                <div
                  ref={desktopContentRef}
                  className="m-slide__content-wrapper px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-3 sm:pt-4 md:pt-6 lg:pt-8 xl:pt-10 desktop-content-wrapper"
                  style={{
                    maxWidth: "1400px",
                    margin: "0 auto",
                    opacity: "0",
                    transform: "translateY(30px)",
                  }}
                >
                  <div className="max-w-2xl">
                    {/* Title */}
                    <h1
                      className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-1.5 sm:mb-2 md:mb-3 lg:mb-3 leading-tight tracking-tight"
                      dangerouslySetInnerHTML={{
                        __html: bannerData.titleFormatted || bannerData.title,
                      }}
                    />

                    {/* Description */}
                    <div className="text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-lg mb-2 sm:mb-3 md:mb-3 lg:mb-4 font-light leading-relaxed max-w-xl">
                      <p>{bannerData.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Layout - Image first, then text below */}
          <div className="block md:hidden relative w-full bg-white">
            {/* Mobile Image */}
            <div className="w-full">
              <img
                src={MSubscriptionBanner}
                alt="Subscriptions"
                className="w-full h-auto object-cover"
                loading="eager"
              />
            </div>

            {/* Mobile Text Content - Below Image */}
            <div className="px-4 pt-6 pb-16 bg-white relative z-10">
              <div
                ref={mobileContentRef}
                className="m-slide__content-wrapper mobile-content text-center"
                style={{
                  opacity: "0",
                  transform: "translateY(30px)",
                  position: "relative",
                  zIndex: 10,
                }}
              >
                {/* Title */}
                <h1
                  className="mobile-title text-black text-3xl font-bold mb-3 leading-tight tracking-tight text-center"
                  style={{ color: "#000000" }}
                  dangerouslySetInnerHTML={{
                    __html: bannerData.titleFormatted || bannerData.title,
                  }}
                />

                {/* Description */}
                <div 
                  className="mobile-description text-black text-sm mb-6 font-light leading-relaxed text-center mx-auto"
                  style={{ color: "#000000", maxWidth: "90%" }}
                >
                  <p>{bannerData.description}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Custom Styles */}
          <style>{`
            /* Move content 30px to the left on large desktop screens */
            @media (min-width: 1280px) {
              .desktop-content-wrapper {
                margin-left: 2rem !important;
                margin-right: auto;
              }
            }
            
            /* Mobile Styles - Text color black */
            @media (max-width: 768px) {
              /* Ensure mobile content is visible and on top */
              .mobile-content {
                position: relative !important;
                z-index: 10 !important;
                display: block !important;
                visibility: visible !important;
              }
              
              /* Make sure mobile content wrapper becomes visible after animation */
              .mobile-content {
                opacity: 1 !important;
              }
              
              /* Center align all mobile content */
              .mobile-content {
                text-align: center !important;
              }
              
              .mobile-title,
              .mobile-title * {
                text-align: center !important;
                display: block;
              }
              
              .mobile-description {
                text-align: center !important;
                margin-left: auto;
                margin-right: auto;
              }
              
              /* Force black text on mobile - override any white text from desktop */
              .mobile-content,
              .mobile-content *,
              .mobile-title,
              .mobile-title *,
              .mobile-description,
              .mobile-description *,
              .mobile-description p {
                color: #000000 !important;
              }
              
              h1,
              .m-slide__content-wrapper h1,
              h1 * {
                color: #000000 !important;
              }
              
              .m-slide__content-wrapper p,
              .m-slide__content-wrapper div[class*="text-"],
              .m-slide__content-wrapper > div {
                color: #000000 !important;
              }
              
              /* Ensure all text in mobile content wrapper is black */
              .block.md\\:hidden .m-slide__content-wrapper,
              .block.md\\:hidden .m-slide__content-wrapper * {
                color: #000000 !important;
              }
            }
          `}</style>
        </section>

        {/* === Sandremo Section === */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col md:flex-row items-center gap-10 bg-white">
          {/* Left Side - Machine Image */}
          <div className="flex-1 flex flex-col items-center text-center">
            <img
              src={Machine1}
              alt="Sandremo Machine"
              className="w-full max-w-md rounded-2xl shadow-lg object-contain"
            />
            <h3
              className="text-2xl font-semibold mt-4"
              style={{ color: "#5B3A29" }}
            >
              Sanremo ZOE Competition
            </h3>
            <p className="text-gray-700 font-medium mb-2">AED 14,900</p>
            <p className="text-gray-600 text-sm max-w-md">
              High-performance commercial espresso machine for consistent and reliable results.
            </p>
          </div>

          {/* Right Side - Text + Beans */}
          <div className="flex-1">
            {/* Heading */}
            <h2
              className="text-3xl md:text-4xl font-bold mb-8"
              style={{ color: "#5B3A29" }}
            >
              Use our machines for free when you purchase 50kg coffee beans monthly
            </h2>

            {/* Beans Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* Bean 1 */}
              <div className="flex flex-col items-center text-center">
                <img
                  src={product1}
                  alt="100% Arabica"
                  className="w-52 h-52 object-contain mb-3 rounded-xl shadow-md"
                />
                <h3
                  className="text-lg font-semibold"
                  style={{ color: "#5B3A29" }}
                >
                  100% Arabica
                </h3>
                <p className="text-gray-700 font-medium">AED 95</p>
                <p className="text-gray-600 text-xs mt-1">
                  Premium smooth coffee from the finest Arabica beans.
                </p>
              </div>

              {/* Bean 2 */}
              <div className="flex flex-col items-center text-center">
                <img
                  src={product2}
                  alt="30% Arabica - 70% Robusta"
                  className="w-52 h-52 object-contain mb-3 rounded-xl shadow-md"
                />
                <h3
                  className="text-lg font-semibold"
                  style={{ color: "#5B3A29" }}
                >
                  30% Robusta – 70% Arabica
                </h3>
                <p className="text-gray-700 font-medium">AED 85</p>
                <p className="text-gray-600 text-xs mt-1">
                  Premium blended coffee crafted for a rich and balanced flavour profile.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* === Roballi Section === */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col md:flex-row items-center gap-10 bg-white">
          {/* Left Side - Roballi Machine */}
          <div className="flex-1 flex flex-col items-center text-center">
            <img
              src={machine2}
              alt="Roballi Machine"
              className="w-full max-w-md rounded-2xl shadow-lg object-contain"
            />
            <h3
              className="text-2xl font-semibold mt-4"
              style={{ color: "#5B3A29" }}
            >
              ROBALLI MACHINE
            </h3>
            <p className="text-gray-700 font-medium">AED 5,490</p>
          </div>

          {/* Right Side - Text + Machines */}
          <div className="flex-1">
            {/* Heading */}
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: "#5B3A29" }}
            >
              Use our machines for free when you purchase 50kg coffee beans monthly
            </h2>
            <p className="text-lg text-gray-600 mb-8 italic">
              Exclusive offer for cafés & businesses.
            </p>

             {/* Beans Section */}
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* Bean 1 */}
              <div className="flex flex-col items-center text-center">
                <img
                  src={product1}
                  alt="100% Arabica"
                  className="w-52 h-52 object-contain mb-3 rounded-xl shadow-md"
                />
                <h3
                  className="text-lg font-semibold"
                  style={{ color: "#5B3A29" }}
                >
                  100% Arabica
                </h3>
                <p className="text-gray-700 font-medium">AED 95</p>
                <p className="text-gray-600 text-xs mt-1">
                  Premium smooth coffee from the finest Arabica beans.
                </p>
              </div>

              {/* Bean 2 */}
              <div className="flex flex-col items-center text-center">
                <img
                  src={product2}
                  alt="30% Arabica - 70% Robusta"
                  className="w-52 h-52 object-contain mb-3 rounded-xl shadow-md"
                />
                <h3
                  className="text-lg font-semibold"
                  style={{ color: "#5B3A29" }}
                >
                  30% Robusta – 70% Arabica
                </h3>
                <p className="text-gray-700 font-medium">AED 85</p>
                <p className="text-gray-600 text-xs mt-1">
                  Premium blended coffee crafted for a rich and balanced flavour profile.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Subscription;