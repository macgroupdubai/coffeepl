import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import Navbar from "../components/Navbar";
import ScrollHeroDiv from "../components/ScrollHeroDiv";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import robali from "../assets/robali.png";
import discountBanner from "../assets/discountHome.jpg";
import product3 from "../assets/product3.png";
import gr1 from "../assets/gr1.png";
import gr2 from "../assets/gr2.png";
import gr3 from "../assets/gr3.png";
import aboutcoffeePL from "../assets/coffee.jpg";
import img100arabica from "../assets/100arabica.png";
import machine1 from "../assets/machine1.png";
import tool from "../assets/tool.png";
import logoBanner from "../assets/logo-banner.jpeg";

// Toggle to bring the homepage discounts banner back (set to true to show).
const SHOW_DISCOUNT_BANNER = false;

const faqItems = [
  {
    question: "What products do you sell?",
    answer:
      "We offer premium coffee beans, professional espresso machines, grinders, and coffee-making tools & accessories — everything you need for the perfect cup.",
  },
  {
    question: "Do you offer machine rentals?",
    answer:
      "Yes — we offer machine rentals starting at AED 25/day, ideal for events, offices, or trying a machine before you buy.",
  },
  {
    question: "How can I get a price for a machine?",
    answer:
      "Tap \"Contact for price\" on any machine's page to message us on WhatsApp, or reach out through our Contact page and our team will get back to you.",
  },
  {
    question: "Where are you located?",
    answer:
      "We're based in International City, Morocco Cluster, I12 Building, Dubai, United Arab Emirates.",
  },
  {
    question: "How do I contact you?",
    answer:
      "Call us at +971 55 441 0816, email info@coffeepl.com, chat with us on WhatsApp, or use the form on our Contact page.",
  },
];

const Home = () => {
  const navigate = useNavigate();
  const coverRef = useRef<HTMLDivElement | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    const target = coverRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          target.classList.add("in-view");
          observer.unobserve(target);
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-white overflow-x-hidden">
      <Navbar />
      <ScrollHeroDiv />

      {/* --- Shop By Category Section --- */}
      <section className="bg-white py-24 px-8 lg:px-24">
        <div className="max-w-[1700px] mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-16 tracking-tight">
            <span className="text-[#2B2B2B] mr-2">SHOP</span>
            <span className="text-[#5B3A29]">BY CATEGORY</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { 
                id: 1, 
                title: "COFFEE", 
                image: img100arabica,
                description: "Hand-selected premium beans roasted to perfection."
              },
              { 
                id: 2, 
                title: "MACHINES", 
                image: machine1,
                description: "Professional-grade espresso machines for home & business."
              },
              { 
                id: 3, 
                title: "GRINDERS", 
                image: product3,
                description: "Precision grinders designed for perfect extraction."
              },
              { 
                id: 4, 
                title: "TOOLS & ACCESSORIES", 
                image: tool,
                description: "Everything required to upgrade your brewing experience."
              },
            ].map((item) => (
              <div
                key={item.id}
                onClick={() => navigate("/shop")}
                className="group cursor-pointer relative overflow-hidden rounded-2xl shadow-md transition-transform duration-500 hover:scale-105 bg-[#f2f2f2]"
              >
                <div className="flex justify-center items-center w-full h-[420px] bg-[#E6D7C3]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-[90%] h-[90%] object-contain transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="absolute bottom-0 left-0 w-full py-4 px-4 text-center bg-black/50 group-hover:bg-[#C6A67A] transition-all duration-500">
                  <div className="text-lg sm:text-xl font-semibold text-white mb-1">
                    {item.title}
                  </div>
                  {item.description && (
                    <div className="text-xs sm:text-sm text-white/90 font-light">
                      {item.description}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Robali X CoffeePL Section --- */}
      <section className="bg-[#f5f5f5] py-24 px-4 sm:px-8 lg:px-24">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={robali}
              alt="Robali Coffee Machine"
              className="w-full max-w-[500px] h-auto object-contain drop-shadow-2xl"
            />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 tracking-tight">
              <span className="text-BLACK">Roballi</span>
              <span className="text-white mx-2 bg-COFFEE_BEAN_BROWN px-2 py-1 rounded-md">
                ×
              </span>
              <span className="text-COFFEE_BEAN_BROWN">CoffeePL</span>
            </h2>
            <p className="text-xl sm:text-2xl font-semibold text-gray-800 mb-8">
              Engineered for Coffee Lovers
            </p>

            <div className="space-y-4 text-gray-800 text-lg font-medium mb-6">
              <p className="flex items-center gap-3">
                <img src={gr1} alt="" className="w-5 h-5" />
                Water pre-infusion ensures rich, even extraction.
              </p>
              <p className="flex items-center gap-3">
                <img src={gr2} alt="" className="w-5 h-5" />
                Eco-mode reduces energy use while staying brew-ready.
              </p>
              <p className="flex items-center gap-3">
                <img src={gr3} alt="" className="w-5 h-5" />
                PID temperature control guarantees consistent performance.
              </p>
            </div>
            <button 
              onClick={() => navigate("/machine")}
              className="mt-4 border border-[#522e2a] text-[#522e2a] hover:bg-[#522e2a] hover:text-white transition-all px-6 py-3 rounded-full font-semibold"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* --- Discounts Banner: full width (1920×700) --- */}
      {SHOW_DISCOUNT_BANNER && (
        <section ref={coverRef} className="fade-in-section w-full max-w-full overflow-x-hidden bg-white pt-8 pb-0">
          <div className="w-full max-w-full min-w-0 overflow-hidden" style={{ aspectRatio: "1920/700" }}>
            <img
              src={discountBanner}
              alt="Discounts and offers"
              className="w-full h-full max-w-full object-cover"
              loading="lazy"
              width={1920}
              height={700}
            />
          </div>
        </section>
      )}

      {/* --- About CoffeePL Section --- */}
      <section className="bg-white text-black py-24 px-8 md:px-20 flex flex-col md:flex-row items-center justify-center gap-12">
        <div className="md:w-1/2 w-full flex justify-center">
          <img
            src={aboutcoffeePL}
            alt="About CoffeePL"
            className="rounded-2xl shadow-lg w-full max-w-md md:max-w-lg object-cover"
          />
        </div>

        <div className="md:w-1/2 w-full space-y-6 text-center md:text-left">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-8 tracking-tight">
            <span className="text-BLACK">About</span>{" "}
            <span className="text-COFFEE_BEAN_BROWN">CoffeePL</span>
          </h2>

          <p className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
            Where Great Coffee Begins
          </p>

          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            We source the finest beans from premium regions and pair them with world-class brewing equipment.
          </p>

          <button 
            onClick={() => navigate("/shop")}
            className="mt-4 border border-[#522e2a] text-[#522e2a] hover:bg-[#522e2a] hover:text-white transition-all px-6 py-3 rounded-full font-semibold"
          >
            Learn More
          </button>
        </div>
      </section>

      {/* --- OUR MAIN PRODUCTS (Replaced with Icon Cards) --- */}
      {/* --- OUR MAIN PRODUCTS (Replaced with Icon Feature Cards) --- */}
      <section className="bg-CREAM_WHITE py-24 px-4 sm:px-8 lg:px-24">
        <div className="max-w-[1400px] mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-20 tracking-tight">
            <span className="text-gray-900 mr-2">OUR</span>
            <span className="text-COFFEE_BEAN_BROWN">MAIN SERVICES</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {/* CARD 1 — Cash */}
            <div className="group bg-white border border-gray-100 rounded-2xl p-10 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="bg-[#fff3e0] w-20 h-20 flex items-center justify-center rounded-full mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10 text-[#ff9800]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 1v22" />
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7H15a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Pay with Cash
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Fast, secure, and hassle-free.
              </p>
            </div>

            {/* CARD 2 — Discount */}
            <div className="group bg-white border border-gray-100 rounded-2xl p-10 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="bg-[#e3f2fd] w-20 h-20 flex items-center justify-center rounded-full mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10 text-[#2196f3]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path d="M9 14l6-6" />
                  <circle cx="9" cy="9" r="1" />
                  <circle cx="15" cy="15" r="1" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Exclusive Discounts
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Weekly deals on premium products.
              </p>
            </div>

            {/* CARD 3 — Rental */}
            <div className="group bg-white border border-gray-100 rounded-2xl p-10 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="bg-[#e8f5e9] w-20 h-20 flex items-center justify-center rounded-full mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10 text-[#4caf50]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path d="M16 11V7a4 4 0 10-8 0v4M5 11h14l1 9H4l1-9z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Machine Rentals
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Rent machines starting at{" "}
                <span className="text-[#4caf50] font-semibold">AED 25/day</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- OUR CAFE SECTION (Commented Out) --- */}
      {/*
      <section className="relative w-full h-[600px] flex items-center justify-start text-white" ...>
        ...
      </section>
      */}

      {/* --- OUR BEST SELLERS SECTION (Commented Out) --- */}
      {/*
      <div className="bg-white pb-20"> ... </div>
      */}

      {/* --- Brand Logos Section --- */}
      <section className="border border-gray-300">
        <img
          src={logoBanner}
          alt="Brand Banner"
          className="w-full h-[100%] object-cover"
        />
      </section>

      {/* --- FAQ Section --- */}
      <section id="faq" className="bg-white py-24 px-4 sm:px-8 lg:px-24">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-16 tracking-tight text-center">
            <span className="text-gray-900 mr-2">FREQUENTLY</span>
            <span className="text-COFFEE_BEAN_BROWN">ASKED QUESTIONS</span>
          </h2>

          <div className="space-y-4">
            {faqItems.map((item, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={item.question}
                  className="bg-white border border-gray-100 rounded-2xl shadow-md overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="text-lg font-bold text-gray-900">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 flex-shrink-0 text-COFFEE_BEAN_BROWN transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <p className="px-6 pb-5 text-gray-600 text-lg leading-relaxed">
                      {item.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
