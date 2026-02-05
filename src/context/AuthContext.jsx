import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase/firebase";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // signup
  const signup = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  // login
  const login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  // logout
  const logout = () => signOut(auth);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return unsub;
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, signup, login, logout }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
