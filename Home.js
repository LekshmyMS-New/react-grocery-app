import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { fetchProducts } from "../services/productService";

const Home = () => {
  const [products, setProducts] = useState([]); // ✅ Default value is an empty array

  useEffect(() => {
    fetchProducts()
      .then((data) => {
        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          setProducts([]); // ✅ Ensure products is always an array
        }
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setProducts([]); // ✅ Set to an empty array if an error occurs
      });
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      {products.length > 0 ? (
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <p>Loading or No Products Available...</p>
      )}
    </div>
  );
};

export default Home;