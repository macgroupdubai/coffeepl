const FilterSidebar = ({ title, options, onFilterChange }) => {
  return (
    <div className="w-full lg:w-1/4  p-8 shadow-sm border-l-2 border-COFFEE_BEAN_BROWN">
      <h2 className="text-3xl font-bold uppercase  text-COFFEE_BEAN_BROWN mb-8 tracking-wide cursor-pointer">
        {title}
      </h2>

      {/* <h3 className="text-lg font-semibold text-[#522e2a] mb-4 cursor-pointer">Coffee</h3> */}

      <ul className="space-y-4">
        {options.map((option, index) => (
          <li
            key={index}
            onClick={() => onFilterChange(option)}
            className="cursor-pointer text-lg text-gray-800 hover:text-COFFEE_BEAN_BROWN transition-colors relative pb-3"
          >
            {option}
            <div className="absolute bottom-0 left-0 w-[65%] border-b-2 border-COFFEE_BEAN_BROWN/30"></div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterSidebar;
