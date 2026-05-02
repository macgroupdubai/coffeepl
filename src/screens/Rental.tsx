import Navbar from "../components/Navbar";
import coffeeHands from "../assets/rent2.png";
import blackCoffee from "../assets/rent1.png";
import sanremoMachine from "../assets/machine1.png"; 
import Footer from "../components/Footer";


const COFFEE_HANDS_IMAGE = coffeeHands;
const BLACK_COFFEE_IMAGE = blackCoffee;
const MACHINE_IMAGE = sanremoMachine;


const Rental = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* --- 1. Top Hero Banner Section (Brown Background) --- */}
      <section className={`w-full bg-white text-[#522e2a]`}>
        <div className="container mx-auto max-w-7xl flex flex-col lg:flex-row h-auto lg:h-[450px]">
          {/* Left Side: Text Content */}
          <div className="flex-1 p-8 sm:p-12 lg:w-1/2 flex flex-col justify-center space-y-4">
            <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight tracking-wide">
              COFFEE MACHINE RENTAL
            </h1>
            <p className="text-lg sm:text-xl font-medium max-w-md">
              Rent professional espresso machines for catering, corporate
              events, weddings, and private gatherings. Flexible 1-7 day rental
              with delivery & installation
            </p>
          </div>

          {/* Right Side: Images (Responsive) */}
          <div className="lg:w-1/2 h-full flex flex-row p-0">
            {/* Image 1: Hands holding coffee cups (Takes up 2/3 width on large screens) */}
            <div className="w-1/2 h-full overflow-hidden">
              <img
                src={COFFEE_HANDS_IMAGE}
                alt="Hands holding three coffee cups"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Image 2: Single black coffee cup and beans (Takes up 1/3 width on large screens) */}
            <div className="w-1/2 h-full overflow-hidden hidden sm:block">
              {" "}
              {/* Hide on small screens to save space */}
              <img
                src={BLACK_COFFEE_IMAGE}
                alt="Black coffee cup and coffee beans"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- 2. Machine Detail Section (Sanremo Zoe Competition) --- */}
      <section
        className={`w-full bg-[#3c3836] text-CREAM_WHITE py-12 sm:py-20`}
      >
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center lg:space-x-12">
            {/* Left Side: Text Content (Stacked on mobile, Left on desktop) */}
            <div className="lg:w-1/2 p-4 sm:p-0 order-2 lg:order-1">
              <h2
                className={`text-4xl sm:text-5xl font-extrabold mb-4 text-[#522e2a] bg-white`}
              >
                SANREMO ZOE COMPETITION
              </h2>
              <div className="space-y-4">
                <p className="text-4xl sm:text-5xl font-bold">25 AED/DAY</p>
                <p className="text-2xl sm:text-3xl font-medium text-gray-400">
                  VALUE: AED 17,000
                </p>
                <p className="text-xl sm:text-2xl font-bold text-gray-100 pt-4">
                  Minimum Rental 6 Months
                </p>
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                  In its compact size, Zoe Competition contains a number of
                  smart solutions that make it the ideal partner for coffee
                  roasters and coffee lovers alike. Without shells or panels,
                  the machine reduces the management, maintenance and servicing
                  costs
                </p>
              </div>
            </div>

            {/* Right Side: Machine Image (Stacked on mobile, Right on desktop) */}
            <div className="lg:w-1/2 flex justify-center items-center p-4 sm:p-0 order-1 lg:order-2 mb-8 lg:mb-0">
              <img
                src={MACHINE_IMAGE}
                alt="Sanremo Zoe Competition Espresso Machine"
                className="w-full max-w-lg lg:max-w-none h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Rental;
