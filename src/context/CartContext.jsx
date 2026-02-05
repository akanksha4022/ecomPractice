import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [orders, setOrders] = useState([]);

  // ➕ add product
  const addToCart = (product) => {
    setCartItems((prev) => {
      const exists = prev.find((p) => p.id === product.id);

      if (exists) {
        return prev.map((p) =>
          p.id === product.id
            ? { ...p, quantity: p.quantity + 1 }
            : p
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // ❌ remove
  const removeFromCart = (id) => {
    setCartItems((prev) =>
      prev.filter((p) => p.id !== id)
    );
  };

  // ➕ increase qty
  const increaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // ➖ decrease qty
  const decreaseQty = (id) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // 📦 checkout → create order
  const checkout = () => {
    if (!cartItems.length) return;

    const newOrder = {
      id: Date.now(),
      items: cartItems,
      total: cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      ),
      date: new Date().toLocaleString(),
    };

    setOrders((prev) => [...prev, newOrder]);

    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        orders,
        addToCart,
        removeFromCart,
        increaseQty,
        decreaseQty,
        checkout,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
