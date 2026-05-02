/**
 * CategoryCard Component
 * Displays a category image with a button title overlay.
 */
const CategoryCard = ({ title, image, link }) => {
  return (
    <a
      href={link}
      className="group block relative overflow-hidden rounded-lg shadow-lg 
                 transform transition-transform duration-500 ease-in-out hover:scale-[1.03]
                 w-full h-[320px] sm:h-[360px] md:h-[380px]"
    >
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
        loading="lazy"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-opacity duration-300"></div>

      {/* Button - left aligned with padding */}
      <div className="absolute bottom-6 left-6">
        <button
          className="bg-white text-gray-800 text-sm font-semibold uppercase tracking-widest py-3 px-8 
                     transition-colors duration-300 ease-in-out border-2 border-white 
                     group-hover:bg-[#CD7F32] group-hover:text-white group-hover:border-[#CD7F32]"
        >
          {title}
        </button>
      </div>
    </a>
  );
};

export default CategoryCard;
