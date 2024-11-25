import React, { lazy, Suspense } from "react";
import SearchBar from "../components/SearchBar";
import Loading from "../components/Loading";

const ProductList = lazy(() => import("../components/ProductList"))

function ProductDisplay() {
  return (
    <Suspense fallback={<Loading />}>
      <SearchBar />
      <ProductList />
    </Suspense>
  );
}

export default ProductDisplay;
