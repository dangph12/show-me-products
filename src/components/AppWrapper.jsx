import React from "react";
import SearchProvider from "../contexts/SearchContext";
import ProductsProvider from "../contexts/ProductsContext";
import CategoriesProvider from "../contexts/CategoriesContext";
import SingleFilterProvider from "../contexts/SingleFilterContext";
import MultiFiltersProvider from "../contexts/MultiFiltersContext";
import { CartProvider } from "../contexts/CartContext";


function AppWrapper({ children }) {
  return (
    <CartProvider>
    <ProductsProvider>
      <CategoriesProvider>
        <SearchProvider>
          <MultiFiltersProvider>
            <SingleFilterProvider>{children}</SingleFilterProvider>
          </MultiFiltersProvider>
        </SearchProvider>
      </CategoriesProvider>
    </ProductsProvider>
    </CartProvider>
  );
}

export default AppWrapper;
