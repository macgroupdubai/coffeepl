import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import bigImg from "../assets/coffee-sampleban.png"; 
import smallImg from "../assets/coffee-30arabica.png"; 
import FilterSidebar from "../components/Filter";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import { getProductsByCategory } from "../utils/productsData";

const Coffee = () => {
  const navigate = useNavigate();
  const coffeeProducts = getProductsByCategory('coffee');
  
  const mainProducts = coffeeProducts.slice(0, 2).map(product => ({
    ...product,
    imageUrl: product.id === 'coffee-100-arabica' ? bigImg : smallImg,
  }));

  const filterOptions = ["Beans", "100% Arabica", "30% Arabica - 70% Robusta"];
  const products = coffeeProducts;

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-5xl md:text-6xl font-bold uppercase mb-10 text-center lg:text-left text-COFFEE_BEAN_BROWN">
          COFFEE
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
          {mainProducts.map((product) => (
            <div
              key={product.id}
              className="relative bg-white shadow-xl overflow-hidden group cursor-pointer rounded-lg"
              style={{ minHeight: "600px" }}
              onClick={() => navigate(`/product/${product.id}`)}
            >
              {/* Full Product Image */}
              <div className="absolute inset-0 w-full h-full overflow-hidden">
                <img
                  src={product.imageUrl}
                  alt={product.title}
                  className="w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:scale-110 group-hover:translate-x-[20%]"
                />
              </div>

              {/* Title - Always Visible, Hidden on Hover */}
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 z-10 transition-opacity duration-700 ease-in-out group-hover:opacity-0">
                <h3 className="text-2xl lg:text-3xl font-bold uppercase text-[#522E2A] mb-2 drop-shadow-lg">
                  {product.title}
                </h3>
              </div>

              {/* Expanding Details Panel - Slides from left, covers right side only */}
              <div className="absolute left-0 top-0 bottom-0 w-0 group-hover:w-1/2 lg:group-hover:w-2/5 backdrop-blur-sm transition-all duration-700 ease-in-out overflow-hidden z-20 shadow-2xl" style={{ backgroundColor: 'rgb(82 46 42 / 85%)' }}>
                <div className="h-full flex flex-col pl-3 pr-14 pt-4 pb-4 lg:pl-4 lg:pr-12 lg:pt-8 lg:pb-8 min-w-[280px] max-w-full">
                  {/* Top Section: Price and Title */}
                  <div className="mb-4 lg:mb-6 overflow-hidden pr-6 lg:pr-2">
                    {product.contactForPrice ? (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate('/contacts');
                        }}
                        className="mb-2 lg:mb-3 px-4 py-2.5 rounded-lg bg-white text-COFFEE_BEAN_BROWN text-sm lg:text-base font-bold uppercase tracking-wide hover:bg-white/90 transition-colors drop-shadow-lg"
                      >
                        Contact for price
                      </button>
                    ) : (
                      <p className="text-2xl lg:text-4xl font-bold text-white mb-2 lg:mb-3 drop-shadow-lg">
                        {product.price}
                      </p>
                    )}
                    <h3 className="text-lg lg:text-2xl font-bold uppercase text-[#fafafa] mb-3 lg:mb-4 drop-shadow-lg break-words pr-5 lg:pr-1" style={{ wordBreak: 'break-word', overflowWrap: 'break-word' }}>
                      {product.title}
                    </h3>
                    <p className="text-xs lg:text-base text-white/90 leading-relaxed drop-shadow-md break-words pr-5 lg:pr-1" style={{ wordBreak: 'break-word', overflowWrap: 'break-word', hyphens: 'auto' }}>
                      {product.description}
                    </p>
                  </div>

                  {/* Bottom Section: Features */}
                  <div className="mt-auto overflow-hidden pr-6 lg:pr-2">
                    <h4 className="text-base lg:text-lg font-semibold text-white mb-3 lg:mb-4 uppercase drop-shadow-lg break-words pr-5 lg:pr-1" style={{ wordBreak: 'break-word', overflowWrap: 'break-word' }}>
                      Features
                    </h4>
                    <ul className="space-y-2 lg:space-y-3 text-xs lg:text-base text-white/90 pr-5 lg:pr-1">
                      <li className="flex items-start">
                        <span className="mr-2 text-white flex-shrink-0">•</span>
                        <span className="break-words" style={{ wordBreak: 'break-word', overflowWrap: 'break-word' }}>Premium quality beans</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-white flex-shrink-0">•</span>
                        <span className="break-words" style={{ wordBreak: 'break-word', overflowWrap: 'break-word' }}>Freshly roasted</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-white flex-shrink-0">•</span>
                        <span className="break-words" style={{ wordBreak: 'break-word', overflowWrap: 'break-word' }}>Rich flavor profile</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col lg:flex-row gap-10 border-t-2 border-COFFEE_BEAN_BROWN/20">
        {/* Left Filter */}
        <FilterSidebar
          title="Coffee Beans"
          options={filterOptions}
          onFilterChange={(option) => console.log("Selected:", option)}
        />

        {/* Right Products */}
        <div className="w-full lg:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-10">
          {products.map((p) => (
            <ProductCard
              key={p.id}
              id={p.id}
              imageUrl={p.imageUrl}
              title={p.title}
              price={p.price}
              originalPrice={p.originalPrice}
              contactForPrice={p.contactForPrice}
              imageObjectPosition={p.imageObjectPosition}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Coffee;
