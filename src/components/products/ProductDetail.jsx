import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

const ProductDetail = ({ product, onClose }) => {
  useEffect(() => {
    if (product) {
      const scrollbarWidth =
        window.innerWidth -
        document.documentElement.clientWidth;

      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0px";
    };
  }, [product]);

  return (
    <AnimatePresence>
      {product && (
        <motion.div
          className="fixed inset-0 z-50 flex justify-end"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          
          <motion.div
            onClick={onClose}
            className="absolute inset-0 bg-black/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          
          <motion.div
            className="relative z-50 bg-white w-full sm:w-[420px] h-full p-6 overflow-y-auto shadow-xl"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
           
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Detail</h2>
              <button
                onClick={onClose}
                className="text-xl hover:scale-110 transition"
              >
                ✕
              </button>
            </div>

            
            <img
              src={product.images?.[0]}
              alt={product.title}
              className="w-full h-60 object-cover rounded-lg"
            />

            
            <p className="text-2xl font-bold mt-4">
              ${product.price}
            </p>

            
            <h3 className="font-semibold mt-2">
              {product.title}
            </h3>

            
            <p className="text-gray-600 mt-3 text-sm leading-relaxed">
              {product.description}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProductDetail;
