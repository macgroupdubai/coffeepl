const PillarCard = ({ image, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center rounded-2xl border-4 border-[#aa5c30] overflow-hidden shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl bg-white">
      {/* Image Section */}
      <div className="w-full h-72 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>

      {/* Text Section */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-[#aa5c30] mb-2 uppercase">
          {title}
        </h3>
        <p className="text-gray-700 text-base leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default PillarCard;
