import React, { createContext, useState, useEffect, useContext } from "react";
import { ProductsContext } from "./ProductsContext";
export const CategoriesContext = createContext();

function CategoriesProvider({ children }) {
  
  const [categories, setCategories] = useState([]);
  const { products } = useContext(ProductsContext);

  useEffect(() => {
    const categories = products.flatMap((product) => product.category);
    setCategories([...new Set(categories)]);
  }, [products]);

  return (
    <CategoriesContext.Provider value={{ categories, setCategories }}>
      {children}
    </CategoriesContext.Provider>
  );
}

export default CategoriesProvider;
