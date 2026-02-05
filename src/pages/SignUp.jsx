import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const SignUp = () => {
  const { signup } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await signup(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6">
          Create Account
        </h2>

        {error && (
          <p className="text-red-500 text-sm mb-4">
            {error}
          </p>
        )}

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 rounded mb-4"
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 rounded mb-4"
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="bg-black text-white w-full py-3 rounded-lg"
        >
          Sign Up
        </button>
        <p className="text-sm text-center mt-4">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-600 hover:underline"
            >
              Login
          </Link>
        </p>

      </form>

    </div>
  );
};

export default SignUp;
