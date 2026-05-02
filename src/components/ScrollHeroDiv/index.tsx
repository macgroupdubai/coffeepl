import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { useNavigate } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import sampleban from "../../assets/ban1.png";
import ban2 from "../../assets/ban2.png";
import ban3 from "../../assets/ban3.png";
import ban4 from "../../assets/ban4.png";
import ban5 from "../../assets/ban5.png";

// Mobile banner images
import mBan1 from "../../assets/m-ban1.png";
import mBan2 from "../../assets/m-ban2.png";
import mBan3 from "../../assets/m-ban3.png";
import mBan4 from "../../assets/m-ban4.png";
import mBan5 from "../../assets/m-ban5.png";

const products = [
  {
    id: 1,
    title: "Freshly Roasted Coffee, Delivered to You",
    titleFormatted: "Freshly Roasted Coffee,<br/><b>Delivered to You</b>",
    description:
      "Premium beans. Professional machines. Everything you need to brew like a barista — at home or at work.",
    imageUrl: sampleban,
    mobileImageUrl: mBan1,
    link: "/shop",
  },
  {
    id: 2,
    title: "30% ARABICA - 70% Robusta",
    titleFormatted: "30% ARABICA - 70%<br/><b>Robusta</b>",
    description:
      "A bold and balanced blend of 30% Arabica and 70% robusta beans. Intense crema, deep flavor, and strong aroma .",
    imageUrl: ban2,
    mobileImageUrl: mBan2,
    link: "/coffee",
  },
  {
    id: 3,
    title: "SANREMO ZOE COMPETITION",
    titleFormatted: "SANREMO ZOE<br/><b>COMPETITION</b>",
    description:
      "The Sanremo Zoe Competition coffee machine combines precision engineering with stunning Italian design. Known for its consistency, durability, and barista-level performance.",
    imageUrl: ban3,
    mobileImageUrl: mBan3,
    link: "/machine",
  },
  {
    id: 4,
    title: "HIGH QUALITY TOOLS",
    titleFormatted: "HIGH QUALITY<br/><b>TOOLS</b>",
    description:
      "Our premium coffee tools — including a professional Knockbox, precision Jug, and ergonomic Tamper — are designed for durability, accuracy, and a seamless brewing experience.",
    imageUrl: ban4,
    mobileImageUrl: mBan4,
    link: "/shop",
  },
  {
    id: 5,
    title: "GRINDER ",
    titleFormatted: "GRINDER<br/>",
    description:
      "Engineered for performance and precision, our coffee grinder delivers perfect consistency for every brew style. Built for efficiency, durability, and ultimate coffee freshness.",
    imageUrl: ban5,
    mobileImageUrl: mBan5,
    link: "/shop",
  },
];

const ScrollHeroDiv = () => {
  const navigate = useNavigate();
  const swiperRef = useRef<SwiperType | null>(null);

  const animateContent = () => {
    // Find the currently active slide's content
    const activeSlide = document.querySelector(".swiper-slide-active");
    if (activeSlide) {
      // Animate desktop content
      const contentWrapper = activeSlide.querySelector(
        ".m-slide__content-wrapper"
      ) as HTMLElement;
      if (contentWrapper) {
        // Reset and animate
        contentWrapper.style.opacity = "0";
        contentWrapper.style.transform = "translateY(30px)";
        requestAnimationFrame(() => {
          setTimeout(() => {
            contentWrapper.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
            contentWrapper.style.opacity = "1";
            contentWrapper.style.transform = "translateY(0)";
          }, 50);
        });
      }
      
      // Animate mobile content separately
      const mobileContent = activeSlide.querySelector(
        ".mobile-content"
      ) as HTMLElement;
      if (mobileContent) {
        // Reset and animate
        mobileContent.style.opacity = "0";
        mobileContent.style.transform = "translateY(30px)";
        requestAnimationFrame(() => {
          setTimeout(() => {
            mobileContent.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
            mobileContent.style.opacity = "1";
            mobileContent.style.transform = "translateY(0)";
          }, 50);
        });
      }
    }
  };

  useEffect(() => {
    // Animate initial slide after a short delay
    const timer = setTimeout(() => {
      animateContent();
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const handleSlideChange = () => {
    // Animate the new slide content after fade transition starts
    setTimeout(() => {
      animateContent();
    }, 200);
  };

  return (
    <section className="relative w-full overflow-hidden">
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={handleSlideChange}
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        fadeEffect={{
          crossFade: true,
        }}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active",
          renderBullet: function (_index, className) {
            return `<span class="${className}"></span>`;
          },
        }}
        loop={true}
        speed={1000}
        className="hero-swiper"
        style={{
          height: "auto",
          minHeight: "450px",
        }}
      >
        {products.map((product, index) => (
          <SwiperSlide key={product.id} data-slide-index={index % products.length}>
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
                  src={product.imageUrl}
                  alt={product.title}
                  className="w-full h-full object-cover object-center"
                  loading={index === 0 ? "eager" : "lazy"}
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
                    className="m-slide__content-wrapper px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-3 sm:pt-4 md:pt-6 lg:pt-8 xl:pt-10 desktop-content-wrapper"
                    style={{
                      maxWidth: "1400px",
                      margin: "0 auto",
                      opacity: "0",
                      transform: "translateY(30px)",
                    }}
                  >
                    <div className="max-w-2xl">
                      {/* Title - Slightly reduced sizing to fit colored space */}
                      <h2
                        className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-1.5 sm:mb-2 md:mb-3 lg:mb-3 leading-tight tracking-tight"
                        dangerouslySetInnerHTML={{
                          __html: product.titleFormatted || product.title,
                        }}
                      />

                      {/* Description - Compact sizing to fit colored space */}
                      <div className="text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-lg mb-2 sm:mb-3 md:mb-3 lg:mb-4 font-light leading-relaxed max-w-xl">
                        <p>{product.description}</p>
                      </div>

                      {/* Buttons - Compact spacing to keep within colored area */}
                      <div className="mt-2 sm:mt-2.5 md:mt-3 lg:mt-4 flex flex-wrap gap-3">
                        <button
                          onClick={() => navigate(product.link)}
                          className="inline-block bg-white text-black border-2 border-white px-4 sm:px-5 md:px-6 lg:px-7 py-1.5 sm:py-2 md:py-2.5 text-xs sm:text-sm md:text-sm font-semibold uppercase tracking-wider transition-all duration-300 hover:bg-transparent hover:text-white"
                        >
                          {product.id === 1 ? "Shop Now" : "SHOP NOW"}
                        </button>
                        {product.id === 1 && (
                          <button
                            onClick={() => navigate("/subscription")}
                            className="inline-block bg-transparent text-white border-2 border-white px-4 sm:px-5 md:px-6 lg:px-7 py-1.5 sm:py-2 md:py-2.5 text-xs sm:text-sm md:text-sm font-semibold uppercase tracking-wider transition-all duration-300 hover:bg-white hover:text-black"
                          >
                            Subscribe & Save
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Layout - Image first, then text below, then dots */}
            <div className="block md:hidden relative w-full bg-white">
              {/* Mobile Image */}
              <div className="w-full">
                <img
                  src={product.mobileImageUrl}
                  alt={product.title}
                  className="w-full h-auto object-cover"
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </div>

              {/* Mobile Text Content - Below Image */}
              <div className="px-4 pt-6 pb-16 bg-white relative z-10">
                <div
                  className="m-slide__content-wrapper mobile-content text-center"
                  style={{
                    opacity: "0",
                    transform: "translateY(30px)",
                    position: "relative",
                    zIndex: 10,
                  }}
                >
                  {/* Title */}
                  <h2
                    className="mobile-title text-black text-3xl font-bold mb-3 leading-tight tracking-tight text-center"
                    style={{ color: "#000000",marginTop:"-5rem" }}
                    dangerouslySetInnerHTML={{
                      __html: product.titleFormatted || product.title,
                    }}
                  />

                  {/* Description */}
                  <div 
                    className="mobile-description text-black text-sm mb-6 font-light leading-relaxed text-center mx-auto"
                    style={{ color: "#000000", maxWidth: "90%" }}
                  >
                    <p>{product.description}</p>
                  </div>

                  {/* Buttons */}
                  <div className="mb-6 flex flex-wrap justify-center gap-3">
                    <button
                      onClick={() => navigate(product.link)}
                      className="inline-block bg-white text-black border-2 border-black px-6 py-2.5 text-sm font-semibold uppercase tracking-wider transition-all duration-300 hover:bg-black hover:text-white"
                      style={{ color: "#000000" }}
                    >
                      {product.id === 1 ? "Shop Now" : "SHOP NOW"}
                    </button>
                    {product.id === 1 && (
                      <button
                        onClick={() => navigate("/subscription")}
                        className="inline-block bg-black text-white border-2 border-black px-6 py-2.5 text-sm font-semibold uppercase tracking-wider transition-all duration-300 hover:bg-white hover:text-black"
                      >
                        Subscribe & Save
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Styles */}
      <style>{`
        .hero-swiper {
          --swiper-pagination-bottom: 24px;
        }
        
        /* Ensure images display consistently across all screen sizes */
        .hero-swiper .swiper-slide img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
        
        /* Maintain aspect ratio on all devices */
        @media (min-width: 768px) {
          .hero-swiper .swiper-slide > div {
            aspect-ratio: 2.63 / 1;
            min-height: 450px;
          }
        }
        
        .hero-swiper .swiper-pagination {
          position: absolute;
          bottom: 24px;
          left: 50%;
          transform: translateX(-50%);
          width: auto;
          display: flex;
          gap: 12px;
          z-index: 20;
        }
        
        /* Desktop/Tablet Pagination - Black default, White active */
        .hero-swiper .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #000000;
          opacity: 1;
          border-radius: 50%;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        
        .hero-swiper .swiper-pagination-bullet-active {
          background: #ffffff;
          width: 10px;
          height: 10px;
        }
        
        .hero-swiper .m-slide__content-wrapper {
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        
        /* Move content 30px to the left on large desktop screens */
        @media (min-width: 1280px) {
          .hero-swiper .desktop-content-wrapper {
            margin-left: 2rem !important;
            margin-right: auto;
          }
        }
        
        /* Mobile Styles - Text color black */
        @media (max-width: 768px) {
          /* Hide desktop content on mobile */
          .hero-swiper .swiper-slide .hidden.md\\:block {
            display: none !important;
          }
          
          /* Ensure mobile content is visible and on top */
          .hero-swiper .swiper-slide .mobile-content {
            position: relative !important;
            z-index: 10 !important;
            display: block !important;
            visibility: visible !important;
          }
          
          /* Make sure mobile content wrapper becomes visible after animation */
          .hero-swiper .swiper-slide-active .mobile-content {
            opacity: 1 !important;
          }
          
          /* Center align all mobile content */
          .hero-swiper .swiper-slide .mobile-content {
            text-align: center !important;
          }
          
          .hero-swiper .swiper-slide .mobile-title,
          .hero-swiper .swiper-slide .mobile-title * {
            text-align: center !important;
            display: block;
          }
          
          .hero-swiper .swiper-slide .mobile-description {
            text-align: center !important;
            margin-left: auto;
            margin-right: auto;
          }
          
          /* Force black text on mobile - override any white text from desktop */
          .hero-swiper .swiper-slide .mobile-content,
          .hero-swiper .swiper-slide .mobile-content *,
          .hero-swiper .swiper-slide .mobile-title,
          .hero-swiper .swiper-slide .mobile-title *,
          .hero-swiper .swiper-slide .mobile-description,
          .hero-swiper .swiper-slide .mobile-description *,
          .hero-swiper .swiper-slide .mobile-description p {
            color: #000000 !important;
          }
          
          .hero-swiper .swiper-slide h2,
          .hero-swiper .swiper-slide .m-slide__content-wrapper h2,
          .hero-swiper .swiper-slide h2 * {
            color: #000000 !important;
          }
          
          .hero-swiper .swiper-slide .m-slide__content-wrapper p,
          .hero-swiper .swiper-slide .m-slide__content-wrapper div[class*="text-"],
          .hero-swiper .swiper-slide .m-slide__content-wrapper > div {
            color: #000000 !important;
          }
          
          /* Ensure all text in mobile content wrapper is black */
          .hero-swiper .swiper-slide .block.md\\:hidden .m-slide__content-wrapper,
          .hero-swiper .swiper-slide .block.md\\:hidden .m-slide__content-wrapper * {
            color: #000000 !important;
          }
          
          .hero-swiper .swiper-pagination {
            position: absolute;
            bottom: 24px;
            left: 50%;
            transform: translateX(-50%);
            width: auto;
            display: flex;
            gap: 8px;
            z-index: 20;
            margin-top: 0;
            padding: 0;
          }
          
          .hero-swiper .swiper-pagination-bullet {
            width: 8px;
            height: 8px;
            background: #000000;
            opacity: 1;
            border-radius: 50%;
            transition: all 0.3s ease;
            cursor: pointer;
          }
          
          .hero-swiper .swiper-pagination-bullet-active {
            width: 8px;
            height: 8px;
            background: #ffffff;
            border: 1px solid #000000;
          }
        }
      `}</style>
    </section>
  );
};

export default ScrollHeroDiv;
