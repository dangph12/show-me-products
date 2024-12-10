import React, { Suspense, useContext, useState, useEffect } from "react";
import { Col, Row, Container } from "react-bootstrap";

import { ProductsContext } from "../contexts/ProductsContext";
import { SearchContext } from "../contexts/SearchContext";
import { CategoriesContext } from "../contexts/CategoriesContext";
import { BrandsContext } from "../contexts/BrandsContext";

import SearchBar from "../components/SearchBar";
import Loading from "../components/Loading";
import SelectCategory from "../components/SelectCategory";
import SelectBrands from "../components/SelectBrands";
import PaginationSection from "../components/PaginationSection";
import ProductGrid from "../components/ProductGrid";

function ProductDisplay() {

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;
  const { products } = useContext(ProductsContext);
  const { search } = useContext(SearchContext);
  const { selectedCategory } = useContext(CategoriesContext);
  const { selectedBrands } = useContext(BrandsContext);


  const filteredProducts = products.filter((product) => {
    const isCategoryMatch =
      selectedCategory === "All" || product.category === selectedCategory;
    const isBrandMatch = selectedBrands[product.brand];
    const isSearchMatch = product.title.toLowerCase().includes(search.toLowerCase());
    return isCategoryMatch && isBrandMatch && isSearchMatch;
  });

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [search, selectedCategory, selectedBrands]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Container>
      <Row>
        <Col md={2}>
          <SelectCategory />
        </Col>
        <Col md={10}>
          <Row>
            <SearchBar />
          </Row>
          <Row>
            <SelectBrands />
          </Row>
          <Suspense fallback={<Loading />}>
            {filteredProducts.length === 0 && (
              <Row>
                <h4 className="text-center mt-4">No products found.</h4>
              </Row>
            )}
            <Row className="mt-4">
              <ProductGrid products={currentProducts} />
            </Row>
          </Suspense>
          <Row>
            <PaginationSection
              totalPages={totalPages}
              currentPage={currentPage}
              handlePageChange={handlePageChange}
            />
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductDisplay;
