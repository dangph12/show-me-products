// import React, { lazy, Suspense, useContext, useState } from "react";
// import SearchBar from "../components/SearchBar";
// import Loading from "../components/Loading";
// import ListGroup from "react-bootstrap/ListGroup";
// import { Card, Col, Row, Pagination, Button } from "react-bootstrap";
// import { ProductsContext } from "../contexts/ProductsContext";
// import { SearchContext } from "../contexts/SearchContext";
// import { Link } from "react-router-dom";

// const ProductList = lazy(() => import("../components/ProductList"));

// function ProductDisplay() {
//   const { products } = useContext(ProductsContext);
//   const { search } = useContext(SearchContext);

//   // State for pagination
//   const [currentPage, setCurrentPage] = useState(1);
//   const productsPerPage = 8; // Number of products per page

//   // Calculate indices for slicing products
//   const indexOfLastProduct = currentPage * productsPerPage;
//   const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

//   const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

//   const currentProducts2 = products.filter((pro) => {
//     const nameFound = pro?.title
//       ?.toLowerCase()
//       ?.includes(search?.toLowerCase());
//     return nameFound;
//   });

//   // Calculate total pages
//   const totalPages = Math.ceil(products.length / productsPerPage);

//   // Handle pagination click
//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   return (
//     <div className="container">
//       <SearchBar />
//       <Suspense fallback={<Loading />}>
//         <Row className="mt-4">
//           {/* Render only the current page's products */}
//           {currentProducts.map((pro, index) => (
//             <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-3">
//               <Card style={{ width: "18rem", marginBottom: "20px" }}>
//                 <Card.Img variant="top" src={pro.images} />
//                 <Card.Body>
//                   <Card.Title>{pro.title}</Card.Title>
//                 </Card.Body>
//                 <ListGroup className="list-group-flush">
//                   <ListGroup.Item>Price: ${pro.price}</ListGroup.Item>
//                   <ListGroup.Item>Category: {pro.category}</ListGroup.Item>
//                   <ListGroup.Item>Tag: {pro.tags.join(" ,")}</ListGroup.Item>
//                   <ListGroup.Item>Brand: {pro.brand}</ListGroup.Item>
//                 </ListGroup>
//                 <Card.Body>
//                   <Link to={`product/${pro.id}`}>
//                     <Button>Details</Button>
//                   </Link>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))}
//         </Row>

//         {/* Pagination Controls */}
//         <Pagination className="justify-content-center">
//           {[...Array(totalPages).keys()].map((page) => (
//             <Pagination.Item
//               key={page + 1}
//               active={page + 1 === currentPage}
//               onClick={() => handlePageChange(page + 1)}
//             >
//               {page + 1}
//             </Pagination.Item>
//           ))}
//         </Pagination>
//       </Suspense>
//     </div>
//   );
// }

// export default ProductDisplay;

import React, { lazy, Suspense, useContext, useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import Loading from "../components/Loading";
<<<<<<< HEAD
import SingleFilter from "../components/SingleFilter";
import MultiFilters from "../components/MultiFilters";
import { Container } from "react-bootstrap";

const ProductList = lazy(() => import("../components/ProductList"));
const ProductGrid = lazy(() => import("../components/ProductGrid"));
const ProductTable = lazy(() => import("../components/ProductTable"));

=======
import ListGroup from "react-bootstrap/ListGroup";
import { Card, Col, Row, Pagination, Button } from "react-bootstrap";
import { ProductsContext } from "../contexts/ProductsContext";
import { SearchContext } from "../contexts/SearchContext";
import { Link } from "react-router-dom";

const ProductList = lazy(() => import("../components/ProductList"));
>>>>>>> 02ea4d5404dc2e96ec1a43300c0900e3c263cc3f

function ProductDisplay() {
  const { products } = useContext(ProductsContext); // Access all products
  const { search } = useContext(SearchContext); // Access search term from context

  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8; // Number of products per page

  // Step 1: Filter products based on the search term
  const filteredProducts = products.filter((pro) =>
    pro?.title?.toLowerCase().includes(search?.toLowerCase())
  );

  // Step 2: Paginate the filtered products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Step 3: Calculate total pages for filtered products
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // Reset to the first page whenever the search term changes
  useEffect(() => {
    setCurrentPage(1);
  }, [search]);

  // Handle pagination click
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
<<<<<<< HEAD
    <>

      <SearchBar />

      <SingleFilter />
      <Suspense fallback={<Loading />}>
        <ProductGrid />
      </Suspense>
    </>
=======
    <div className="container">
      <SearchBar />
      <Suspense fallback={<Loading />}>
        <Row className="mt-4">
          {/* Render only the current page's products */}
          {currentProducts.map((pro, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-3">
              <Card style={{ width: "18rem", marginBottom: "20px" }}>
                <Card.Img variant="top" src={pro.images} />
                <Card.Body>
                  <Card.Title>{pro.title}</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>Price: ${pro.price}</ListGroup.Item>
                  <ListGroup.Item>Category: {pro.category}</ListGroup.Item>
                  <ListGroup.Item>Tag: {pro.tags.join(", ")}</ListGroup.Item>
                  <ListGroup.Item>Brand: {pro.brand}</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                  <Link to={`product/${pro.id}`}>
                    <Button>Details</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <h4 className="text-center mt-4">No products found.</h4>
        )}

        {/* Pagination Controls */}
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
    </div>
>>>>>>> 02ea4d5404dc2e96ec1a43300c0900e3c263cc3f
  );
}

export default ProductDisplay;
