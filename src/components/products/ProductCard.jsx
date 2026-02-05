import { useCart } from "../../context/CartContext";


const ProductCard = ({ product, onSelect }) => {

  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition overflow-hidden " 
    onClick={() => onSelect(product)}>

      {/* IMAGE AREA */}
      <div className="relative w-full h-64 bg-gray-100">

        {/* Add Button */}
        <button onClick={(e)=>{
            e.stopPropagation(); 
    addToCart(product);
        }} className="absolute top-3 right-3 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow hover:scale-105 transition">
          +
        </button>

        {/* Product Image */}
        <img
          src={product.images?.[0]}
          alt={product.title}
          className="w-full h-full object-cover"
        />

        {/* Category Badge */}
        <span className="absolute bottom-3 left-3 bg-white px-3 py-1 text-xs rounded-full shadow">
          {product.category?.name}
        </span>
      </div>

      {/* INFO */}
      <div className="p-4 flex justify-between items-start">

        {/* Title */}
        <h3 className="text-sm font-medium text-gray-800 leading-snug max-w-[70%]">
          {product.title}
        </h3>

        {/* Price */}
        <p className="font-bold text-lg">
          ${product.price}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
