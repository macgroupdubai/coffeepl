import type { MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';

interface ProductCardProps {
  imageUrl: string;
  title: string;
  price: string;
  originalPrice?: string;
  contactForPrice?: boolean;
  imageObjectPosition?: 'left' | 'center' | 'right';
  id?: string;
}

const objectPositionClass = (pos?: 'left' | 'center' | 'right') => {
  if (pos === 'left') return 'object-left';
  if (pos === 'right') return 'object-right';
  return 'object-center';
};

const ProductCard = ({ imageUrl, title, price, contactForPrice, imageObjectPosition, id }: ProductCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (id) {
      navigate(`/product/${id}`);
    }
  };

  const handleContactForPrice = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    navigate('/contacts');
  };

  return (
    <div 
      className="relative border-2 border-COFFEE_BEAN_BROWN rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 group cursor-pointer"
      onClick={handleClick}
    >
      {/* Product Image */}
      <div className="relative">
        <img
          src={imageUrl}
          alt={title}
          className={`w-full h-[300px] object-cover ${objectPositionClass(imageObjectPosition)} transition-all duration-500 group-hover:opacity-60`}
        />
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
        <div className="bg-COFFEE_BEAN_BROWN px-6 py-3 rounded-md shadow-md">
          <p className="text-white font-semibold tracking-wide uppercase">
            View Details
          </p>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4 text-center">
        <h3 className="text-xl font-bold uppercase text-COFFEE_BEAN_BROWN mb-1">
          {title}
        </h3>
        {contactForPrice ? (
          <button
            type="button"
            onClick={handleContactForPrice}
            className="mt-3 w-full min-h-[48px] flex items-center justify-center px-4 py-2.5 rounded-lg bg-COFFEE_BEAN_BROWN text-white text-sm sm:text-base font-semibold uppercase tracking-wide hover:opacity-90 transition-opacity"
          >
            Contact for price
          </button>
        ) : (
          <p className="text-gray-700 text-lg">{price}</p>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
