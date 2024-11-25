import React from "react";
import SearchProvider from "../contexts/SearchContext";
import ProductsProvider from "../contexts/ProductsContext";

function AppWrapper({ children }) {
  return (
    <ProductsProvider>
      <SearchProvider>{children}</SearchProvider>
    </ProductsProvider>
  );
}

export default AppWrapper;
