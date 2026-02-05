import { useState } from "react";
import Navbar from "./components/layout/Navbar";
import { Outlet } from "react-router-dom";

function App() {
  const [selectedCategory, setSelectedCategory] =
    useState("all");

  return (
    
    <div className="w-full">
      <Navbar
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
      />      
      <Outlet context={{ selectedCategory }} />

    </div>
  );
}

export default App;
