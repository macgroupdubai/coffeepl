import { useState } from "react";
import { Search, X } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import { productsData, type Product } from "../utils/productsData";

import coffeeBeansIcon from "../assets/cat1.png";
import machineIcon from "../assets/cat2.png";
import equipmentsIcon from "../assets/cat3.png";
import offersIcon from "../assets/cat4.png";

// Single source of truth for category filtering, shared by the top circles
// and the sidebar list (no parallel filter systems).
type CategoryFilter =
  | "coffee"
  | "machine"
  | "equipment"
  | "grinders"
  | "offers";

const matchesFilter = (product: Product, filter: CategoryFilter): boolean => {
  switch (filter) {
    case "coffee":
      return product.category === "coffee";
    case "machine":
      return product.category === "machine";
    case "equipment":
      return product.category === "equipment";
    case "grinders":
      return (
        product.category === "machine" &&
        product.title.toLowerCase().includes("grinder")
      );
    case "offers":
      return product.originalPrice != null;
  }
};

const Shop = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<CategoryFilter | null>(null);

  // Toggle behavior: clicking the active filter again clears it.
  const toggleFilter = (filter: CategoryFilter) =>
    setActiveFilter((prev) => (prev === filter ? null : filter));

  // Use products from data file (exclude hidden)
  const allProducts = productsData.filter((p) => !p.hidden);

  // Filter products by search query and the active category filter
  const filteredProducts = allProducts.filter(
    (product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (activeFilter === null || matchesFilter(product, activeFilter))
  );

  interface CategoryIconProps {
    name: string;
    image: string;
    active?: boolean;
    action?: () => void;
  }

  const CategoryIcon: React.FC<CategoryIconProps> = ({
    name,
    image,
    active,
    action,
  }) => (
    <button
      onClick={action}
      aria-pressed={active}
      className="group flex flex-col items-center space-y-3 focus:outline-none"
    >
      <div
        className={`w-20 h-20 sm:w-28 sm:h-28 rounded-full overflow-hidden flex items-center justify-center transition duration-300 transform hover:scale-105 cursor-pointer bg-black border-2 ${
          active
            ? "border-amber-500 ring-4 ring-amber-400/40"
            : "border-black"
        }`}
      >
        <img
          src={image}
          alt={name}
          className="w-[170%] h-[170%] object-cover object-center"
        />
      </div>
      <p
        className={`text-sm sm:text-base font-semibold text-center transition duration-300 ${
          active ? "text-amber-600" : "text-black group-hover:text-amber-400"
        }`}
      >
        {name}
      </p>
    </button>
  );

  // Category circles for the top section
  const categoryIcons: { name: string; image: string; filter: CategoryFilter }[] =
    [
      { name: "Coffee Beans", image: coffeeBeansIcon, filter: "coffee" },
      { name: "Espresso Machine", image: machineIcon, filter: "machine" },
      { name: "Equipments", image: equipmentsIcon, filter: "equipment" },
      { name: "Offers", image: offersIcon, filter: "offers" },
    ];

  // Sidebar categories (same filter state as the circles)
  const sidebarCategories: { label: string; filter: CategoryFilter }[] = [
    { label: "COFFEE", filter: "coffee" },
    { label: "MACHINES", filter: "machine" },
    { label: "GRINDERS", filter: "grinders" },
    { label: "TOOLS & ACCESSORIES", filter: "equipment" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Category Circles */}
      <section className="w-full sm:py-24 bg-white">
        <div className="flex flex-wrap justify-center gap-6 sm:gap-10 md:gap-16">
          {categoryIcons.map((cat) => (
            <CategoryIcon
              key={cat.name}
              name={cat.name}
              image={cat.image}
              active={activeFilter === cat.filter}
              action={() => toggleFilter(cat.filter)}
            />
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
                <h2 className="text-3xl font-bold uppercase text-COFFEE_BEAN_BROWN mb-8 tracking-wide">
                  Categories
                </h2>
                <ul className="space-y-4">
                  {sidebarCategories.map((option) => {
                    const isActive = activeFilter === option.filter;
                    return (
                      <li
                        key={option.label}
                        onClick={() => toggleFilter(option.filter)}
                        className={`cursor-pointer text-lg transition-colors ${
                          isActive
                            ? "text-COFFEE_BEAN_BROWN font-bold"
                            : "text-gray-800 hover:text-COFFEE_BEAN_BROWN"
                        }`}
                      >
                        {option.label}
                      </li>
                    );
                  })}
                </ul>

                {activeFilter && (
                  <button
                    type="button"
                    onClick={() => setActiveFilter(null)}
                    className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-COFFEE_BEAN_BROWN hover:underline"
                  >
                    <X className="w-4 h-4" />
                    Clear filter
                  </button>
                )}
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
                <p className="text-xl text-gray-600">
                  No products found{activeFilter ? " for this filter" : " matching your search"}.
                </p>
                {activeFilter && (
                  <button
                    type="button"
                    onClick={() => setActiveFilter(null)}
                    className="mt-4 inline-flex items-center gap-2 text-COFFEE_BEAN_BROWN font-semibold hover:underline"
                  >
                    <X className="w-4 h-4" />
                    Clear filter
                  </button>
                )}
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
