import React from 'react'
import { useEffect, useState } from 'react'
import { getCategories, getProducts } from '../services/api'
import ProductCard from "../components/products/ProductCard";
import Search from '../components/ui/Search'
import ProductDetail from "../components/products/ProductDetail";
import { useOutletContext } from "react-router-dom";




const Home = () => {
    // useEffect(()=>{
    //     getProducts().then((res)=>{
    //         console.log(res.data);
    //     }).catch((err)=>{
    //         console.log(err);
    //     })
    // },[])
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);


  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { selectedCategory } = useOutletContext();


  useEffect(() => {
    getProducts()
      .then((res) =>{
        console.log(res.data)
        setProducts(res.data);
        setLoading(false);
      })     
      .catch((err) => {
        console.log(err)
        setError("Failed to load products");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="p-8 text-center text-lg">
        Loading products...
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-8 text-center text-red-500">
        {error}
      </div>
    );
  }

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
    setIsDetailOpen(true);
  };

  const handleCloseDetail = () => {
    
    setSelectedProduct(null);
    setIsDetailOpen(false);
  };


  const filteredProducts = products.filter((product) => {
  const matchesCategory =
    selectedCategory === "all" ||
    product.category?.name
      ?.toLowerCase() === selectedCategory;

    const matchesSearch =
      product.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });




  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
    <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
  

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {filteredProducts ? filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} onSelect={handleSelectProduct} />
      )) : "not found"}
    </div>

    <ProductDetail
        product={selectedProduct}
        onClose={handleCloseDetail}
    />

</div>
  )
}

export default Home
