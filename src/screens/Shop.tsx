import { useState } from "react";
import { Search } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import { productsData } from "../utils/productsData";

import coffeeBeansIcon from "../assets/cat1.png";
import machineIcon from "../assets/cat2.png";
import equipmentsIcon from "../assets/cat3.png";
import offersIcon from "../assets/cat4.png";
import clearanceIcon from "../assets/cat5.png";

const Shop = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Use products from data file (exclude hidden)
  const allProducts = productsData.filter(p => !p.hidden);

  // Filter products based on search
  const filteredProducts = allProducts.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  interface CategoryIconProps {
    name: string;
    image: string;
    action?: () => void;
  }

  const CategoryIcon: React.FC<CategoryIconProps> = ({
    name,
    image,
    action,
  }) => (
    <button
      onClick={action}
      className="flex flex-col items-center space-y-3 focus:outline-none"
    >
      <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-full border-2 border-black overflow-hidden flex items-center justify-center transition duration-300 transform hover:scale-105 cursor-pointer bg-black">
        <img
          src={image}
          alt={name}
          className="w-[170%] h-[170%] object-cover object-center"
        />
      </div>
      <p className="text-black text-sm sm:text-base font-semibold text-center group-hover:text-amber-400 transition duration-300">
        {name}
      </p>
    </button>
  );

  // Category icons for top section
  const categoryIcons = [
    { name: "Coffee Beans", image: coffeeBeansIcon },
    { name: "Espresso Machine", image: machineIcon },
    { name: "Equipments", image: equipmentsIcon },
    { name: "Offers", image: offersIcon },
    { name: "Clearance", image: clearanceIcon },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Category Circles */}
      <section className="w-full sm:py-24 bg-white">
        <div className="flex flex-wrap justify-center gap-6 sm:gap-10 md:gap-16">
          {categoryIcons.map((cat) => (
            <CategoryIcon key={cat.name} name={cat.name} image={cat.image} />
          ))}
        </div>
      </section>

      {/* Main Shop Section with Sidebar and Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left Sidebar */}
          <div className="w-full lg:w-1/4">
            <div className="sticky top-24 space-y-8">
              {/* Search Box */}
              <div>
                <label className="block text-lg font-semibold text-[#522e2a] mb-3 uppercase">
                  Search
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border-2 border-[#522e2a] rounded-md focus:outline-none focus:ring-2 focus:ring-[#522e2a] bg-white"
                  />
                </div>
              </div>

              {/* Categories - All options in one list */}
              <div className="p-8 shadow-sm border-l-2 border-COFFEE_BEAN_BROWN">
                <h2 className="text-3xl font-bold uppercase text-COFFEE_BEAN_BROWN mb-8 tracking-wide cursor-pointer">
                  Categories
                </h2>
                <ul className="space-y-4">
                  {[
                    "COFFEE",
                    "MACHINES",
                    "GRINDERS",
                    "TOOLS & ACCESSORIES",
                  ].map((option, index) => (
                    <li
                      key={index}
                      onClick={() => console.log("Selected:", option)}
                      className="cursor-pointer text-lg text-gray-800 hover:text-COFFEE_BEAN_BROWN transition-colors"
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Side - All Products Grid */}
          <div className="w-full lg:w-3/4">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    imageUrl={product.imageUrl}
                    title={product.title}
                    price={product.price}
                    originalPrice={product.originalPrice}
                    contactForPrice={product.contactForPrice}
                    imageObjectPosition={product.imageObjectPosition}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-xl text-gray-600">No products found matching your search.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Shop;

