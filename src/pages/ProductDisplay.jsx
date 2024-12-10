import React, { Suspense, useContext, useState, useEffect } from "react";
import {
  Card,
  Col,
  Row,
  Pagination,
  Button,
  Container,
  ListGroup,
} from "react-bootstrap";
import { Link } from "react-router-dom";

import { ProductsContext } from "../contexts/ProductsContext";
import { SearchContext } from "../contexts/SearchContext";
import { CategoriesContext } from "../contexts/CategoriesContext";
import { BrandsContext } from "../contexts/BrandsContext";

import SearchBar from "../components/SearchBar";
import Loading from "../components/Loading";
import SelectCategory from "../components/SelectCategory";
import SelectBrands from "../components/SelectBrands";

function ProductDisplay() {
  const { products } = useContext(ProductsContext);
  const { search } = useContext(SearchContext);
  const { selectedCategory } = useContext(CategoriesContext);
  const { selectedBrands } = useContext(BrandsContext);

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  const filteredProducts = products.filter((product) => {
    const isCategoryMatch =
      selectedCategory === "All" || product.category === selectedCategory;
    const isBrandMatch = selectedBrands[product.brand];
    const isSearchMatch =
      product.title.toLowerCase().includes(search.toLowerCase()) ||
      product.tags.some((tag) => tag.toLowerCase().includes(search.toLowerCase()));

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
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [search]);

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
            <Row className="mt-4">
              {currentProducts.map((product, index) => (
                <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-3">
                  <Card>
                    <Card.Img variant="top" src={product.thumbnail} />
                    <Card.Body>
                      <Card.Title>{product.title}</Card.Title>
                      <ListGroup variant="flush">
                        <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
                        <ListGroup.Item>
                          Category: {product.category}
                        </ListGroup.Item>
                        <ListGroup.Item>
                          Tag: {product.tags.join(", ")}
                        </ListGroup.Item>
                        <ListGroup.Item>Brand: {product.brand}</ListGroup.Item>
                      </ListGroup>
                      <Link to={`/product/${product.id}`}>
                        <Button className="mt-2">Details</Button>
                      </Link>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
            {filteredProducts.length === 0 && (
              <h4 className="text-center mt-4">No products found.</h4>
            )}

            {totalPages > 1 && (
              <Pagination className="justify-content-center mt-4">
                {[...Array(totalPages).keys()].map((page) => (
                  <Pagination.Item
                    key={page + 1}
                    active={page + 1 === currentPage}
                    onClick={() => handlePageChange(page + 1)}
                  >
                    {page + 1}
                  </Pagination.Item>
                ))}
              </Pagination>
            )}
          </Suspense>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductDisplay;
