import { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import CTABanner from "../assets/cta.jpeg";
import Footer from "../components/Footer";
import WholeSaleBanner from "../assets/wholesaleBanner.png";
import MWholeSaleBanner from "../assets/m-wholesaleBanner.png";

const CTA_IMAGE = CTABanner;

const Wholesale = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    companyName: "",
    address: "",
    triedCoffee: "",
    businessType: "",
    productsInterested: [] as string[],
    coffeeInterested: [] as string[],
    equipmentInterested: [] as string[],
    hearAbout: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (
    category: "productsInterested" | "coffeeInterested" | "equipmentInterested",
    value: string
  ) => {
    setFormData((prev) => {
      const currentArray = prev[category];
      const newArray = currentArray.includes(value)
        ? currentArray.filter((item) => item !== value)
        : [...currentArray, value];
      return { ...prev, [category]: newArray };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  const mapLocation = "https://www.google.com/maps?q=25.1620639,55.4191205&z=16";
  const mapAddress = "Coffee PL, I-12, Morocco I12 - Shop 20 - Dubai International City - Morocco Cluster - Dubai - United Arab Emirates";
  const desktopContentRef = useRef<HTMLDivElement>(null);
  const mobileContentRef = useRef<HTMLDivElement>(null);

  const bannerData = {
    title: "COMMERCIAL & WHOLESALE",
    titleFormatted: "COMMERCIAL &<br/><b>WHOLESALE</b>",
    description: "Every business has different requirements and needs. We deliver a solutions approach to providing ingredients and products, developing tailored beverages for your concept and your vision.",
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
    <div className={`min-h-screen bg-white`}>
      <Navbar />

      {/* --- First Section with Full Background Image --- */}
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
              src={WholeSaleBanner}
              alt="Commercial & Wholesale"
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
              src={MWholeSaleBanner}
              alt="Commercial & Wholesale"
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

      {/* === Form Section === */}
      <section className=" py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Content Paragraph */}
          <div className="mb-10">
            <p className="text-gray-700 text-lg leading-relaxed">
              At Coffee PL, we're passionate about bringing premium coffee experiences to businesses across the region. 
              Whether you're running a cozy café, a bustling restaurant, or a corporate office, our wholesale subscription 
              service ensures you always have access to the finest Arabica beans, state-of-the-art equipment, and expert 
              support. Join our community of coffee enthusiasts and elevate your business with quality that speaks for itself.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-[#522E2A]">WHOLESALE INFORMATION</h2>

            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2 text-gray-700">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 bg-white border-2 border-gray-300 rounded-md focus:border-[#522E2A] focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2 text-gray-700">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 bg-white border-2 border-gray-300 rounded-md focus:border-[#522E2A] focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold mb-2 text-gray-700">
                  Phone <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 bg-white border-2 border-gray-300 rounded-md focus:border-[#522E2A] focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="companyName" className="block text-sm font-semibold mb-2 text-gray-700">
                  Company Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 bg-white border-2 border-gray-300 rounded-md focus:border-[#522E2A] focus:outline-none"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="address" className="block text-sm font-semibold mb-2 text-gray-700">
                Address <span className="text-red-500">*</span>
              </label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
                rows={3}
                className="w-full p-3 bg-white border-2 border-gray-300 rounded-md focus:border-[#522E2A] focus:outline-none"
              />
            </div>

            {/* Have you tried our coffee */}
            <div className="mb-6">
              <label htmlFor="triedCoffee" className="block text-sm font-semibold mb-2 text-gray-700">
                Have you tried our coffee? <span className="text-red-500">*</span>
              </label>
              <select
                id="triedCoffee"
                name="triedCoffee"
                value={formData.triedCoffee}
                onChange={handleInputChange}
                required
                className="w-full p-3 bg-white border-2 border-gray-300 rounded-md focus:border-[#522E2A] focus:outline-none"
              >
                <option value="">Please Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

            {/* Business Type */}
            <div className="mb-6">
              <label htmlFor="businessType" className="block text-sm font-semibold mb-2 text-gray-700">
                Business Type <span className="text-red-500">*</span>
              </label>
              <select
                id="businessType"
                name="businessType"
                value={formData.businessType}
                onChange={handleInputChange}
                required
                className="w-full p-3 bg-white border-2 border-gray-300 rounded-md focus:border-[#522E2A] focus:outline-none"
              >
                <option value="">Please Select</option>
                <option value="Coffee Focused Café">Coffee Focused Café</option>
                <option value="Regular Café">Regular Café</option>
                <option value="Restaurant">Restaurant</option>
                <option value="Hotel">Hotel</option>
                <option value="Bar">Bar</option>
                <option value="Office">Office</option>
                <option value="Mobile Site">Mobile Site</option>
              </select>
            </div>

            {/* Products Interested In */}
            <div className="mb-6">
              <label className="block text-sm font-semibold mb-3 text-gray-700">
                Products You Are Interested In
              </label>
              <div className="space-y-2">
                {["Coffee Beans", "Espresso Machines", "Coffee Tools", "Grinders", "Accessories"].map((product) => (
                  <label key={product} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.productsInterested.includes(product)}
                      onChange={() => handleCheckboxChange("productsInterested", product)}
                      className="w-5 h-5 border-2 border-black rounded mr-3 text-[#522E2A] focus:ring-[#522E2A]"
                    />
                    <span className="text-gray-700">{product}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Coffee Interested In */}
            <div className="mb-6">
              <label className="block text-sm font-semibold mb-3 text-gray-700">
                Coffee Interested In
              </label>
              <div className="space-y-2">
                {["100% Arabica", "30% Arabica - 70% Robusta", "Single Origin", "Blends", "Decaf"].map((coffee) => (
                  <label key={coffee} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.coffeeInterested.includes(coffee)}
                      onChange={() => handleCheckboxChange("coffeeInterested", coffee)}
                      className="w-5 h-5 border-2 border-black rounded mr-3 text-[#522E2A] focus:ring-[#522E2A]"
                    />
                    <span className="text-gray-700">{coffee}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Equipment Interested In */}
            <div className="mb-6">
              <label className="block text-sm font-semibold mb-3 text-gray-700">
                Equipment Interested In
              </label>
              <div className="space-y-2">
                {["Espresso Machines", "Grinders", "Coffee Tools", "Cup Sealers", "Blenders", "Ice Machines"].map((equipment) => (
                  <label key={equipment} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.equipmentInterested.includes(equipment)}
                      onChange={() => handleCheckboxChange("equipmentInterested", equipment)}
                      className="w-5 h-5 border-2 border-black rounded mr-3 text-[#522E2A] focus:ring-[#522E2A]"
                    />
                    <span className="text-gray-700">{equipment}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* How did you hear about coffeepl */}
            <div className="mb-6">
              <label htmlFor="hearAbout" className="block text-sm font-semibold mb-2 text-gray-700">
                How did you hear about coffeepl?
              </label>
              <select
                id="hearAbout"
                name="hearAbout"
                value={formData.hearAbout}
                onChange={handleInputChange}
                className="w-full p-3 bg-white border-2 border-gray-300 rounded-md focus:border-[#522E2A] focus:outline-none"
              >
                <option value="">Please Select</option>
                <option value="Social Media">Social Media</option>
                <option value="Press">Press</option>
                <option value="Word of Mouth">Word of Mouth</option>
                <option value="Website">Website</option>
                <option value="Email">Email</option>
                <option value="Radio">Radio</option>
                <option value="At an Event">At an Event</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#522E2A] text-white py-3 px-6 rounded-md font-semibold uppercase tracking-wider hover:bg-[#3d211e] transition-colors duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* --- CTA Banner Section (Cover Image) --- */}
      <section className="w-full relative h-[450px] sm:h-[500px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${CTA_IMAGE})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        </div>
        <div className="relative container mx-auto max-w-7xl h-full flex items-end p-8 sm:p-12 md:p-16">
          <div className="max-w-lg space-y-4 pb-10">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white uppercase tracking-wider leading-tight">
              PREFER TO SPEAK <br /> TO A REAL PERSON?
            </h2>
            <p className="text-lg sm:text-xl font-medium text-gray-200">
              Please contact our team or hit the button below to visit our
              Contact page. We are available on weekdays.
            </p>
            <a
              href="/contacts"
              className={`inline-block mt-4 px-8 py-3 bg-white text-black font-bold uppercase tracking-wider rounded-md hover:bg-gray-200 transition duration-300 shadow-xl`}
            >
              CONTACT US!
            </a>
          </div>
        </div>
      </section>

      {/* === Map Section === */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-[#522E2A]">
            Find Us
          </h2>
          <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg">
            <a
              href={mapLocation}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full h-full"
            >
              <iframe
                src={`https://maps.google.com/maps?q=${encodeURIComponent(mapAddress)}&t=&z=16&ie=UTF8&iwloc=&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="cursor-pointer"
              />
            </a>
          </div>
          <div className="text-center mt-4">
            <p className="text-gray-600 mb-2">
              Click on the map to open in Google Maps
            </p>
            <p className="text-gray-700 font-medium">
              {mapAddress}
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Wholesale;
