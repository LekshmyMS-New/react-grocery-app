import { useEffect, useState } from "react";
import { fetchProducts } from "../services/productService";

const useProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  return products;
};

export default useProducts;  // ✅ Correct default export
