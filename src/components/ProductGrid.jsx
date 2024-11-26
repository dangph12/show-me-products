import React, { useContext } from "react";
import { Container, Col, Row, Image } from "react-bootstrap";
import { SearchContext } from "../contexts/SearchContext";
import { ProductsContext } from "../contexts/ProductsContext";
import { SingleFilterContext } from "../contexts/SingleFilterContext";
import { MultiFiltersContext } from "../contexts/MultiFiltersContext";
import ProductVerticalCard from "./ProductVerticalCard";
import ProductHorizontalCard from "./ProductHorizontalCard";

function ProductGrid() {
  const { products } = useContext(ProductsContext);
  const { search } = useContext(SearchContext);
  const { singleFilter } = useContext(SingleFilterContext);
  const { multiFilters } = useContext(MultiFiltersContext);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesSingleFilter =
      singleFilter === "All" || product.category === singleFilter;
    const matchesMultiFilters =
      multiFilters.length === 0 ||
      multiFilters.includes(product.category);
    return matchesSearch && (matchesSingleFilter && matchesMultiFilters);
  });

  return (
    <Container>
      <Row>
        {filteredProducts &&
          filteredProducts.map((product, idx) => (
            <Col xs={12} sm={6} md={4} lg={3} key={idx + product.title}>
              <ProductHorizontalCard product={product} />
            </Col>
          ))}
      </Row>
    </Container>
  );
}

export default ProductGrid;
