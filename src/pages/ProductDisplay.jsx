import React, { lazy, Suspense } from "react";
import SearchBar from "../components/SearchBar";
import Loading from "../components/Loading";
import SingleFilter from "../components/SingleFilter";
import MultiFilters from "../components/MultiFilters";

const ProductList = lazy(() => import("../components/ProductList"));
const ProductGrid = lazy(() => import("../components/ProductGrid"));
const ProductTable = lazy(() => import("../components/ProductTable"));


function ProductDisplay() {
  return (
    <>
      <SearchBar />
      <SingleFilter />
      <Suspense fallback={<Loading />}>
        <ProductTable />
      </Suspense>
    </>
  );
}

export default ProductDisplay;
