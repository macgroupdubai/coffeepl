import { useState, useMemo, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Star, Check, ShoppingCart, Heart } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getProductById } from '../utils/productsData';

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = id ? getProductById(id) : undefined;

  const galleryImages = useMemo(() => {
    if (!product) return [];
    const extra = product.imageGallery ?? [];
    return [product.imageUrl, ...extra.filter((u) => u !== product.imageUrl)];
  }, [product]);

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    setActiveImageIndex(0);
  }, [id]);

  const coverObjectClass =
    product?.imageObjectPosition === 'left'
      ? 'object-left'
      : product?.imageObjectPosition === 'right'
        ? 'object-right'
        : 'object-center';

  if (!product) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl font-bold text-COFFEE_BEAN_BROWN mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-8">The product you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate('/shop')}
            className="bg-COFFEE_BEAN_BROWN text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition-colors"
          >
            Back to Shop
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Breadcrumb Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-COFFEE_BEAN_BROWN hover:text-opacity-80 transition-colors mb-4"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          <span className="font-semibold">Back</span>
        </button>
      </div>

      {/* Main Product Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Product Image */}
          <div className="sticky top-24 space-y-4">
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl bg-gray-100">
              <img
                src={galleryImages[activeImageIndex] ?? product.imageUrl}
                alt={product.title}
                className={`w-full h-full object-cover ${coverObjectClass}`}
              />
              {product.inStock && (
                <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  In Stock
                </div>
              )}
            </div>
            {galleryImages.length > 1 && (
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                {galleryImages.map((src, idx) => (
                  <button
                    key={`${src}-${idx}`}
                    type="button"
                    onClick={() => setActiveImageIndex(idx)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      idx === activeImageIndex
                        ? 'border-COFFEE_BEAN_BROWN ring-2 ring-COFFEE_BEAN_BROWN/30'
                        : 'border-gray-200 hover:border-gray-400'
                    }`}
                  >
                    <img src={src} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Category Badge */}
            <div>
              <span className="inline-block bg-COFFEE_BEAN_BROWN/10 text-COFFEE_BEAN_BROWN px-4 py-2 rounded-full text-sm font-semibold uppercase">
                {product.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-COFFEE_BEAN_BROWN uppercase leading-tight">
              {product.title}
            </h1>

            {/* Rating */}
            {product.rating && (
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating!)
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-gray-700 font-semibold">{product.rating}</span>
                {product.reviews && (
                  <span className="text-gray-500">({product.reviews} reviews)</span>
                )}
              </div>
            )}

            {/* Price */}
            {product.contactForPrice ? (
              <button
                type="button"
                onClick={() => navigate('/contacts')}
                className="inline-block px-8 py-4 rounded-lg bg-COFFEE_BEAN_BROWN text-white text-lg font-bold uppercase tracking-wide hover:bg-opacity-90 transition-colors shadow-lg"
              >
                Contact for price
              </button>
            ) : (
              <div className="text-4xl font-bold text-COFFEE_BEAN_BROWN">
                {product.price}
              </div>
            )}

            {/* Description */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 uppercase">Description</h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                {product.longDescription}
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 uppercase">Features</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Specifications */}
            {product.specifications && (
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900 uppercase">Specifications</h2>
                <div className="bg-gray-50 rounded-lg p-6 space-y-3">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center border-b border-gray-200 pb-3 last:border-0 last:pb-0">
                      <span className="font-semibold text-gray-700">{key}:</span>
                      <span className="text-gray-600">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              {!product.contactForPrice && (
                <button 
                  onClick={() => navigate("/contacts")}
                  className="flex-1 bg-COFFEE_BEAN_BROWN text-white px-8 py-4 rounded-lg font-semibold uppercase tracking-wide hover:bg-opacity-90 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </button>
              )}
              <button className="px-8 py-4 border-2 border-COFFEE_BEAN_BROWN text-COFFEE_BEAN_BROWN rounded-lg font-semibold uppercase tracking-wide hover:bg-COFFEE_BEAN_BROWN hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
                <Heart className="w-5 h-5" />
                Wishlist
              </button>
            </div>

            {/* Additional Info */}
            <div className="bg-COFFEE_BEAN_BROWN/5 rounded-lg p-6 space-y-3">
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-600" />
                <span className="text-gray-700">Free shipping on orders over AED 200</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-600" />
                <span className="text-gray-700">30-day return policy</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-600" />
                <span className="text-gray-700">Secure payment options</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-COFFEE_BEAN_BROWN uppercase mb-8 text-center">
            You May Also Like
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* This would show related products - for now just a placeholder */}
            <div className="text-center text-gray-500 py-8">
              <p>Related products coming soon</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetails;

