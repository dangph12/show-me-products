import React, { lazy, Suspense } from "react";
import SearchBar from "../components/SearchBar";
import Loading from "../components/Loading";
import SingleFilter from "../components/SingleFilter";
import MultiFilters from "../components/MultiFilters";
import { Container } from "react-bootstrap";

const ProductList = lazy(() => import("../components/ProductList"));
const ProductGrid = lazy(() => import("../components/ProductGrid"));
const ProductTable = lazy(() => import("../components/ProductTable"));


function ProductDisplay() {
  return (
    <>

      <SearchBar />

      <SingleFilter />
      <Suspense fallback={<Loading />}>
        <ProductGrid />
      </Suspense>
    </>
  );
}

export default ProductDisplay;
