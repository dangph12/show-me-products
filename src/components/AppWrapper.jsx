import React from "react";
import SearchProvider from "../contexts/SearchContext";
import ProductsProvider from "../contexts/ProductsContext";
import CategoriesProvider from "../contexts/CategoriesContext";
import SingleFilterProvider from "../contexts/SingleFilterContext";
import MultiFiltersProvider from "../contexts/MultiFiltersContext";

function AppWrapper({ children }) {
  return (
    <ProductsProvider>
      <CategoriesProvider>
        <SearchProvider>
          <MultiFiltersProvider>
            <SingleFilterProvider>{children}</SingleFilterProvider>
          </MultiFiltersProvider>
        </SearchProvider>
      </CategoriesProvider>
    </ProductsProvider>
  );
}

export default AppWrapper;
