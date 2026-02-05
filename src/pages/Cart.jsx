import { useCart } from "../context/CartContext";

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    checkout,
    increaseQty,
    decreaseQty,
  } = useCart();

  if (!cartItems.length) {
    return (
      <div className="p-10 text-center text-gray-500">
        Cart is empty 🛒.
      </div>
    );
  }

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-4xl mx-auto p-8">

      <h1 className="text-2xl font-bold mb-6">
        Shopping Cart
      </h1>

      <div className="space-y-4">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 border p-4 rounded-xl"
          >
            <img
              src={item.images?.[0]}
              alt={item.title}
              className="w-20 h-20 object-cover rounded"
            />

            <div className="flex-1">
              <h3 className="font-medium">
                {item.title}
              </h3>

              
              <div className="flex items-center gap-3 mt-1">

                <button
                  onClick={() => decreaseQty(item.id)}
                  className="bg-red-200 px-2 rounded"
                >
                  −
                </button>

                <span className="font-medium">
                  {item.quantity}
                </span>

                <button
                  onClick={() => increaseQty(item.id)}
                  className="bg-green-200 px-2 rounded"
                >
                  +
                </button>

              </div>
            </div>

            <p className="font-semibold">
              ${item.price * item.quantity}
            </p>

            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-500 text-sm"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-between items-center">
        <p className="font-bold">
          Total: ${total}
        </p>

        <button
          onClick={checkout}
          className="bg-black text-white px-6 py-3 rounded-full"
        >
          Checkout
        </button>
      </div>

    </div>
  );
};

export default Cart;
