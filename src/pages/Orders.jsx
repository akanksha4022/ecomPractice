import { useCart } from "../context/CartContext";

const Orders = () => {
  const { orders } = useCart();

  if (!orders.length) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center text-gray-500">
        No orders yet .
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4">

      <div className="max-w-5xl mx-auto">

        <h1 className="text-3xl font-bold mb-8">
          My Orders
        </h1>

        <div className="space-y-8">
          {orders.map((order) => (
            <div
              key={order.id}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-6"
            >

             
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b pb-4 mb-4">

                <p className="text-sm text-gray-500">
                  Order placed on {order.date}
                </p>

                <p className="text-lg font-semibold">
                  Total: ${order.total}
                </p>
              </div>

              
              <div className="space-y-4">
                {order.items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 border rounded-xl p-3 hover:bg-gray-50 transition"
                  >

                    
                    <img
                      src={item.images?.[0]}
                      alt={item.title}
                      className="w-20 h-20 object-cover rounded-lg"
                    />

                    
                    <div className="flex-1">
                      <p className="font-medium text-sm">
                        {item.title}
                      </p>

                      <p className="text-xs text-gray-500 mt-1">
                        Quantity: {item.quantity}
                      </p>
                    </div>

                    
                    <p className="font-semibold text-sm">
                      ${item.price * item.quantity}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Orders;
