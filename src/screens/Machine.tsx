// src/pages/Machine.jsx

import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import FilterSidebar from "../components/Filter";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import { getProductsByCategory, getProductById } from "../utils/productsData";

import machine1 from "../assets/machinePage.png";
import machine2 from "../assets/machine2.png";
import mobileMachine1 from "../assets/m-machinePage.png";
import mobileMachine2 from "../assets/m-machine2.png";
import machine3 from "../assets/Full-automatic Cup Sealer.jpg";
import machine4 from "../assets/blender-boston.jpg";
import machine5 from "../assets/ice-machine.jpeg";

const Machine = () => {
  const navigate = useNavigate();
  const machineProducts = getProductsByCategory('machine');
  
  // Map main products with mobile images
  const mainProducts = [
    getProductById('machine-sanremo-zoe'),
    getProductById('machine-roballi'),
  ].filter(Boolean).map(product => ({
    ...product!,
    imageUrl: product!.id === 'machine-sanremo-zoe' ? machine1 : machine2,
    mobileImageUrl: product!.id === 'machine-sanremo-zoe' ? mobileMachine1 : mobileMachine2,
  }));

  const filterOptions = [
    "SANREMO ZOE COMPETITION",
    "ROBALLI MACHINE",
    "ROBALLI GRINDER",
    "Blender Machine",
    "Full automatic Cup Sealer",
    "Ice  Machine",
  ];

  // Map all machine products with their images
  const imageMap: { [key: string]: string } = {
    'machine-sanremo-zoe': machine1,
    'machine-roballi': machine2,
    'machine-blender': machine4,
    'machine-cup-sealer': machine3,
    'machine-ice': machine5,
  };

  const products = machineProducts.map(product => ({
    ...product,
    imageUrl: imageMap[product.id] || product.imageUrl,
  }));

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-5xl md:text-6xl font-bold uppercase mb-10 text-center lg:text-left text-[#522e2a]">
          MACHINES
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
          {mainProducts.map((product) => (
            <div
              key={product.id}
              className="relative bg-white shadow-xl overflow-hidden group cursor-pointer rounded-lg"
              style={{ minHeight: "600px" }}
              onClick={() => navigate(`/product/${product.id}`)}
            >
              <div className="absolute inset-0 w-full h-full">
                {/* Mobile Image */}
                <img
                  src={product.mobileImageUrl}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110 lg:hidden"
                />
                {/* Desktop Image */}
                <img
                  src={product.imageUrl}
                  alt={product.title}
                  className="hidden lg:block w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 z-10 transition-opacity duration-700 ease-in-out group-hover:opacity-0">
                <h3 className="text-2xl lg:text-3xl font-bold uppercase text-[#522E2A] mb-2 drop-shadow-lg">
                  {product.title}
                </h3>
              </div>

              <div className="absolute left-0 top-0 bottom-0 w-0 group-hover:w-1/2 lg:group-hover:w-2/5 backdrop-blur-sm transition-all duration-700 ease-in-out overflow-hidden z-20 shadow-2xl" style={{ backgroundColor: 'rgb(82 46 42 / 85%)' }}>
                <div className="h-full flex flex-col pl-3 pr-14 pt-4 pb-4 lg:pl-4 lg:pr-12 lg:pt-8 lg:pb-8 min-w-[280px] max-w-full">
                  <div className="mb-4 lg:mb-6 overflow-hidden pr-6 lg:pr-2">
                    <p className="text-2xl lg:text-4xl font-bold text-white mb-2 lg:mb-3 drop-shadow-lg">
                      {product.price}
                    </p>
                    <h3 className="text-lg lg:text-2xl font-bold uppercase text-[#fafafa] mb-3 lg:mb-4 drop-shadow-lg break-words pr-5 lg:pr-1" style={{ wordBreak: 'break-word', overflowWrap: 'break-word' }}>
                      {product.title}
                    </h3>
                    <p className="text-xs lg:text-base text-white/90 leading-relaxed drop-shadow-md break-words pr-5 lg:pr-1" style={{ wordBreak: 'break-word', overflowWrap: 'break-word', hyphens: 'auto' }}>
                      {product.description}
                    </p>
                  </div>

                  <div className="mt-auto overflow-hidden pr-6 lg:pr-2">
                    <h4 className="text-base lg:text-lg font-semibold text-white mb-3 lg:mb-4 uppercase drop-shadow-lg break-words pr-5 lg:pr-1" style={{ wordBreak: 'break-word', overflowWrap: 'break-word' }}>
                      Features
                    </h4>
                    <ul className="space-y-2 lg:space-y-3 text-xs lg:text-base text-white/90 pr-5 lg:pr-1">
                      <li className="flex items-start">
                        <span className="mr-2 text-white flex-shrink-0">•</span>
                        <span className="break-words" style={{ wordBreak: 'break-word', overflowWrap: 'break-word' }}>Professional-grade performance</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-white flex-shrink-0">•</span>
                        <span className="break-words" style={{ wordBreak: 'break-word', overflowWrap: 'break-word' }}>Durable construction</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-white flex-shrink-0">•</span>
                        <span className="break-words" style={{ wordBreak: 'break-word', overflowWrap: 'break-word' }}>Easy to maintain</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col lg:flex-row gap-10 border-t-2 border-[#522e2a]/20">
        <FilterSidebar
          title="Machines"
          options={filterOptions}
          onFilterChange={(option) => console.log("Selected:", option)}
        />
        <div className="w-full lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
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

export default Machine;
