import { Link, useNavigate } from "react-router-dom";
import {
  ShoppingCart,
  User,
  Package,
  LogOut,
} from "lucide-react";
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";
import { useState } from "react";

const categories = [
  { name: "All", value: "all" },
  { name: "Clothes", value: "clothes" },
  { name: "Electronics", value: "electronics" },
  { name: "Furnitures", value: "furnitures" },
  { name: "Toys", value: "toys" },
];

const Navbar = ({ setSelectedCategory, selectedCategory }) => {
  const { user, logout } = useAuth();
  const { cartItems } = useCart();
  const navigate = useNavigate();

  const [openMenu, setOpenMenu] = useState(false);

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const handleLogout = async () => {
    await logout();
    setOpenMenu(false);
    navigate("/login");
  };

  return (
    <nav className="w-full border-b border-b-gray-200 bg-white px-6 py-4 flex items-center justify-between relative">

      
      <div className=" flex items-center gap-6">
        <Link to="/" className="hidden sm:block text-xl font-bold">
          Yephee
        </Link>

        
        <ul className="flex items-center gap-4 text-sm">
          {categories.map((cat) => (
            <li key={cat.name}>
              <button
                onClick={() => setSelectedCategory(cat.value)}
                className={`hover:underline underline-offset-4 ${
                  selectedCategory === cat.value
                    ? "font-semibold underline"
                    : ""
                }`}
              >
                {cat.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      
      <div className="hidden md:flex items-center gap-6 text-sm">
        {user && (
          <span className="text-gray-600">
            {user.email}
          </span>
        )}

        <Link to="/orders" className="hover:underline">
          My Orders
        </Link>

        {user ? (
          <button
            onClick={handleLogout}
            className="hover:underline text-red-500"
          >
            Logout
          </button>
        ) : (
          <Link to="/login" className="hover:underline">
            Login
          </Link>
        )}

        <Link to="/cart" className="relative flex items-center">
          <ShoppingCart size={20} />

          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </Link>
      </div>

      
      <button
        onClick={() => setOpenMenu((p) => !p)}
        className="md:hidden"
      >
        <User size={22} />
      </button>

      
      {openMenu && (
        <div className="absolute top-16 right-4 bg-white border rounded-xl shadow-lg w-60 z-50 p-3">

          {user && (
            <p className="text-sm text-gray-600 mb-2 truncate">
              {user.email}
            </p>
          )}

          <Link
            to="/orders"
            onClick={() => setOpenMenu(false)}
            className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded"
          >
            <Package size={16} />
            My Orders
          </Link>

          <Link
            to="/cart"
            onClick={() => setOpenMenu(false)}
            className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded"
          >
            <ShoppingCart size={16} />
            Cart ({cartCount})
          </Link>

          {user ? (
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 p-2 text-red-500 hover:bg-red-50 rounded w-full"
            >
              <LogOut size={16} />
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              onClick={() => setOpenMenu(false)}
              className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded"
            >
              Login
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
