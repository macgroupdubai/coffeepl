// Products data with detailed information
import sampleban from '../assets/sampleban.png';
import arabica30 from '../assets/30arabica.png';
import machine1Img from '../assets/machinePage.png';
import machine2Img from '../assets/machine2.png';
import blenderBoston from '../assets/blender-boston.jpg';
import cupSealer from '../assets/Full-automatic Cup Sealer.jpg';
import iceMachine from '../assets/ice-machine.jpeg';
import tamper from '../assets/CoffeePL_Tamper.png';
import pitcher from '../assets/coffeepljug600ml.png';
import brush from '../assets/jercey-300x300.png';
import knockBox from '../assets/FROSTED HARD CUP 500 ML- 90MM, 15G.jpg';
import scale from '../assets/shaker.jpg';
import eurekaAtomProGrinder from '../assets/eureka-atom-pro-grinder.jpeg';

export interface Product {
  id: string;
  title: string;
  price: string;
  originalPrice?: string;
  imageUrl: string;
  /** Extra product images (detail page); primary thumbnail is imageUrl */
  imageGallery?: string[];
  category: 'coffee' | 'machine' | 'equipment';
  description: string;
  longDescription: string;
  features: string[];
  specifications?: {
    [key: string]: string;
  };
  inStock: boolean;
  rating?: number;
  reviews?: number;
  hidden?: boolean;
  /** When true, hide numeric price and show “Contact for price” CTA */
  contactForPrice?: boolean;
  /** Focal point for object-cover thumbnails (keeps left-side artwork visible) */
  imageObjectPosition?: 'left' | 'center' | 'right';
}

export const productsData: Product[] = [
  // Coffee Products
  {
    id: 'coffee-100-arabica',
    title: '100% Arabica',
    price: 'AED 150',
    imageUrl: sampleban,
    category: 'coffee',
    description: 'Premium-grade 100% Arabica coffee beans, handpicked from high-altitude farms.',
    longDescription: 'Our 100% Arabica coffee beans are carefully selected from the finest high-altitude farms around the world. Each bean is handpicked at peak ripeness to ensure maximum flavor and aroma. This premium blend offers a smooth, rich taste with notes of chocolate, caramel, and a hint of fruitiness. Perfect for those who appreciate the delicate nuances of specialty coffee.',
    features: [
      'Premium quality beans',
      'Freshly roasted',
      'Rich flavor profile',
      'Single origin',
      'Handpicked selection',
      'Smooth finish'
    ],
    specifications: {
      'Origin': 'Ethiopia, Colombia',
      'Roast Level': 'Medium',
      'Weight': '500g',
      'Grind': 'Whole Bean',
      'Caffeine': 'Medium'
    },
    inStock: true,
    rating: 4.8,
    reviews: 124
  },
  {
    id: 'coffee-30-70-blend',
    title: '30% Arabica - 70% Robusta',
    price: 'AED 110',
    imageUrl: arabica30,
    category: 'coffee',
    description: 'A bold and balanced blend of 30% Arabica and 70% Robusta beans.',
    longDescription: 'This powerful blend combines the smoothness of Arabica with the bold intensity of Robusta. Perfect for espresso lovers, it produces a rich crema and delivers a strong, full-bodied flavor with notes of dark chocolate and toasted nuts. Ideal for those who prefer a more robust coffee experience with a longer-lasting finish.',
    features: [
      'Bold flavor profile',
      'Rich crema',
      'Strong aroma',
      'Perfect for espresso',
      'Long-lasting finish',
      'Balanced blend'
    ],
    specifications: {
      'Origin': 'Brazil, Vietnam',
      'Roast Level': 'Dark',
      'Weight': '500g',
      'Grind': 'Whole Bean',
      'Caffeine': 'High'
    },
    inStock: true,
    rating: 4.6,
    reviews: 98
  },
  // Machine Products
  {
    id: 'machine-sanremo-zoe',
    title: 'SANREMO ZOE COMPETITION',
    price: 'AED 14,900',
    imageUrl: machine1Img,
    category: 'machine',
    description: 'A high-performance espresso machine designed for professional baristas.',
    longDescription: 'The SANREMO ZOE COMPETITION is a state-of-the-art espresso machine engineered for professional baristas and coffee enthusiasts. Featuring advanced temperature control, dual boiler system, and precision pressure profiling, this machine delivers exceptional espresso extraction. Its elegant design and robust construction make it perfect for both commercial and home use.',
    features: [
      'Professional-grade performance',
      'Dual boiler system',
      'Precision temperature control',
      'Advanced pressure profiling',
      'Elegant design',
      'Easy to maintain',
      'Commercial quality'
    ],
    specifications: {
      'Boiler Type': 'Dual Boiler',
      'Group Heads': '2',
      'Power': '3500W',
      'Dimensions': '65 x 55 x 50 cm',
      'Weight': '45 kg',
      'Warranty': '2 Years'
    },
    inStock: true,
    rating: 4.9,
    reviews: 67
  },
  {
    id: 'machine-roballi',
    title: 'ROBALLI MACHINE',
    price: 'AED 6,000',
    imageUrl: machine2Img,
    category: 'machine',
    description: 'Compact and efficient, the Roballi Machine delivers powerful brewing performance.',
    longDescription: 'The ROBALLI MACHINE is a compact yet powerful espresso machine perfect for small cafés, offices, and home kitchens. Despite its smaller footprint, it doesn\'t compromise on quality, delivering consistent espresso shots with rich crema. Its user-friendly interface and reliable performance make it an excellent choice for both beginners and experienced baristas.',
    features: [
      'Compact design',
      'Powerful performance',
      'User-friendly interface',
      'Consistent extraction',
      'Energy efficient',
      'Reliable operation'
    ],
    specifications: {
      'Boiler Type': 'Single Boiler',
      'Group Heads': '1',
      'Power': '1500W',
      'Dimensions': '35 x 45 x 40 cm',
      'Weight': '18 kg',
      'Warranty': '1 Year'
    },
    inStock: true,
    rating: 4.7,
    reviews: 89
  },
  {
    id: 'machine-roballi-grinder',
    title: 'ROBALLI GRINDER',
    price: 'AED 3,800',
    imageUrl: eurekaAtomProGrinder,
    imageObjectPosition: 'center',
    category: 'machine',
    description: 'Professional coffee grinder by Boston Coolers for consistent, precise grinding in cafés and home setups.',
    longDescription: 'The ROBALLI GRINDER delivers reliable, uniform grind quality for espresso and filter coffee. Built for daily use in professional environments, it pairs clean design with dependable performance. Ideal for anyone who wants repeatable results and a grinder that fits the CoffeePL / Boston Coolers machinery line.',
    features: [
      'Precision grinding for espresso and brew methods',
      'Durable build for commercial-style use',
      'Easy to operate and maintain',
      'Consistent particle size',
      'Professional machinery category',
      'Boston Coolers brand quality'
    ],
    specifications: {
      'Brand': 'Boston Coolers',
      'Category': 'Machinery'
    },
    inStock: true,
    rating: 4.8,
    reviews: 24
  },
  {
    id: 'machine-blender',
    title: 'Blender Machine',
    price: 'AED 1,800',
    imageUrl: blenderBoston,
    category: 'machine',
    description: 'Professional-grade blender for smoothies, frappes, and specialty drinks.',
    longDescription: 'This commercial-grade blender machine is designed for high-volume operations. With powerful motor and durable blades, it can handle ice, frozen fruits, and tough ingredients with ease. Perfect for creating smoothies, frappes, milkshakes, and other specialty beverages. Its robust construction ensures long-lasting performance even in busy environments.',
    features: [
      'High-powered motor',
      'Durable stainless steel blades',
      'Large capacity',
      'Easy to clean',
      'Commercial grade',
      'Quiet operation'
    ],
    specifications: {
      'Motor Power': '1500W',
      'Capacity': '2 Liters',
      'Speed Settings': '5',
      'Dimensions': '25 x 30 x 45 cm',
      'Weight': '8 kg',
      'Warranty': '1 Year'
    },
    inStock: true,
    rating: 4.5,
    reviews: 45
  },
  {
    id: 'machine-cup-sealer',
    title: 'Full automatic Cup Sealer',
    price: 'AED 2,100',
    imageUrl: cupSealer,
    category: 'machine',
    description: 'Automated cup sealing machine for professional beverage service.',
    longDescription: 'The Full Automatic Cup Sealer is an essential piece of equipment for any takeaway beverage operation. It automatically seals cups with a perfect, airtight seal, keeping drinks fresh and preventing spills. With adjustable sealing temperature and easy-to-use controls, this machine streamlines your service while maintaining professional quality.',
    features: [
      'Fully automatic operation',
      'Adjustable temperature',
      'Fast sealing',
      'Airtight seal',
      'Easy to operate',
      'Compact design'
    ],
    specifications: {
      'Sealing Speed': '2-3 seconds',
      'Cup Size': '12-24 oz',
      'Power': '800W',
      'Dimensions': '40 x 35 x 30 cm',
      'Weight': '12 kg',
      'Warranty': '1 Year'
    },
    inStock: true,
    rating: 4.4,
    reviews: 32
  },
  {
    id: 'machine-ice',
    title: 'Ice Machine',
    price: 'AED 3499',
    imageUrl: iceMachine,
    category: 'machine',
    description: 'Commercial ice maker for high-volume cafes and kitchens.',
    longDescription: 'This stainless-steel commercial ice machine rapidly produces crystal-clear ice cubes that keep drinks perfectly chilled. Designed for cafés, bars, and restaurants, it operates quietly, includes a food-grade storage bin, and features an auto-clean cycle to keep maintenance simple. Adjustable cube sizing and smart sensors ensure you always have the right amount of fresh ice ready to serve.',
    features: [
      'Rapid ice production',
      'Adjustable cube size settings',
      'Food-grade insulated storage bin',
      'Self-cleaning cycle',
      'Low-noise compressor',
      'Energy-efficient operation'
    ],
    specifications: {
      'Ice Output': '55 kg / day',
      'Storage Capacity': '22 kg',
      'Cycle Time': '10-15 minutes',
      'Power': '750W',
      'Dimensions': '50 x 45 x 60 cm',
      'Weight': '35 kg',
      'Warranty': '2 Years'
    },
    inStock: true,
    rating: 4.6,
    reviews: 56
  },
  // Equipment Products
  {
    id: 'equipment-tamper',
    title: 'Coffee Tamper',
    price: 'AED 49',
    originalPrice: 'AED 49',
    imageUrl: tamper,
    category: 'equipment',
    description: 'Professional coffee tamper for perfect espresso puck preparation.',
    longDescription: 'This precision-engineered coffee tamper ensures consistent and even tamping for optimal espresso extraction. Made from high-quality stainless steel with a comfortable ergonomic handle, it provides the perfect balance and weight for professional tamping. The flat base ensures uniform pressure distribution across the coffee puck.',
    features: [
      'Precision engineered',
      'Stainless steel construction',
      'Ergonomic handle',
      'Perfect weight balance',
      'Flat base design',
      'Professional quality'
    ],
    specifications: {
      'Material': 'Stainless Steel',
      'Base Diameter': '58mm',
      'Weight': '450g',
      'Handle': 'Wood/Steel',
      'Finish': 'Polished'
    },
    inStock: true,
    rating: 4.7,
    reviews: 78
  },
  {
    id: 'equipment-pitcher',
    title: 'Milk Frothing Pitcher',
    price: 'AED 32',
    imageUrl: pitcher,
    category: 'equipment',
    description: 'Professional milk frothing pitcher for perfect latte art.',
    longDescription: 'This 600ml milk frothing pitcher is designed for professional baristas who demand precision in their milk steaming and latte art. The spout is carefully crafted for precise pouring, while the handle provides excellent grip and control. Made from food-grade stainless steel, it heats evenly and is easy to clean.',
    features: [
      'Professional spout design',
      'Food-grade stainless steel',
      'Perfect for latte art',
      'Even heating',
      'Easy to clean',
      'Comfortable handle'
    ],
    specifications: {
      'Capacity': '600ml',
      'Material': 'Stainless Steel',
      'Spout Type': 'Professional',
      'Height': '15cm',
      'Base Diameter': '8cm'
    },
    inStock: true,
    rating: 4.8,
    reviews: 92
  },
  {
    id: 'equipment-brush',
    title: 'Knock Box',
    price: 'AED 29',
    originalPrice: 'AED 29',
    imageUrl: brush,
    category: 'equipment',
    description: 'Durable knock box for disposing of used coffee pucks.',
    longDescription: 'This sturdy knock box is an essential tool for any espresso setup. Made from high-quality materials, it features a bar that allows you to easily knock out used coffee pucks. The design includes a removable inner container for easy cleaning and disposal. Its compact size makes it perfect for any workspace.',
    features: [
      'Durable construction',
      'Removable inner container',
      'Easy to clean',
      'Compact design',
      'Stable base',
      'Professional quality'
    ],
    specifications: {
      'Material': 'Stainless Steel/Plastic',
      'Capacity': '500ml',
      'Dimensions': '15 x 12 x 10 cm',
      'Weight': '800g'
    },
    inStock: true,
    rating: 4.5,
    reviews: 64
  },
  {
    id: 'equipment-knock-box',
    title: 'Cleaning Brush',
    price: 'AED 120',
    hidden: true,
    imageUrl: knockBox,
    category: 'equipment',
    description: 'Durable knock box for disposing of used coffee pucks.',
    longDescription: 'This sturdy knock box is an essential tool for any espresso setup. Made from high-quality materials, it features a bar that allows you to easily knock out used coffee pucks. The design includes a removable inner container for easy cleaning and disposal. Its compact size makes it perfect for any workspace.',
    features: [
      'Durable construction',
      'Removable inner container',
      'Easy to clean',
      'Compact design',
      'Stable base',
      'Professional quality'
    ],
    specifications: {
      'Material': 'Stainless Steel/Plastic',
      'Capacity': '500ml',
      'Dimensions': '15 x 12 x 10 cm',
      'Weight': '800g'
    },
    inStock: true,
    rating: 4.6,
    reviews: 51
  },
  {
    id: 'equipment-scale',
    title: 'Shaker Machine',
    price: 'AED 1,100',

    imageUrl: scale,
    category: 'equipment',
    description: 'Professional shaker machine for cocktails, iced coffee, and specialty drinks.',
    longDescription: 'This professional shaker machine is built for bars and coffee shops. It delivers consistent, fast shaking for cocktails, iced coffee, cold brew, and specialty beverages. Durable construction and easy cleaning make it ideal for high-volume use.',
    features: [
      'Professional-grade shaking',
      'Durable construction',
      'Easy to clean',
      'Suitable for cocktails and cold drinks',
      'Compact design',
      'Commercial use'
    ],
    specifications: {
      'Capacity': '500–700ml',
      'Material': 'Stainless Steel',
      'Type': 'Cocktail / Drink shaker',
      'Dimensions': '15 x 10 x 25 cm'
    },
    inStock: true,
    rating: 4.7,
    reviews: 103
  }
];

// Helper function to get product by ID (returns undefined for hidden products)
export const getProductById = (id: string): Product | undefined => {
  const product = productsData.find(p => p.id === id);
  return product?.hidden ? undefined : product;
};

// Helper function to get products by category (excludes hidden products)
export const getProductsByCategory = (category: string): Product[] => {
  return productsData.filter(product => product.category === category && !product.hidden);
};

// WhatsApp business number used for price enquiries.
export const WHATSAPP_NUMBER = '971525459375';

// Builds a WhatsApp deep link with a product-specific price enquiry message.
export const getPriceEnquiryWhatsAppLink = (productName: string): string =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hi, I'd like to know the price for ${productName}.`
  )}`;

// Builds a WhatsApp deep link with a product-specific general enquiry message.
export const getProductEnquiryWhatsAppLink = (productName: string): string =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hi, I'm interested in ${productName}. Could you share more details?`
  )}`;




