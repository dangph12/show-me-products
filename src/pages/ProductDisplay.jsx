// import React, { lazy, Suspense, useContext } from "react";
// import SearchBar from "../components/SearchBar";
// import Loading from "../components/Loading";
// import ListGroup from "react-bootstrap/ListGroup";
// import { Card, Col, Row } from "react-bootstrap";
// import { ProductsContext } from "../contexts/ProductsContext";



// const ProductList = lazy(() => import("../components/ProductList"));

// function ProductDisplay() {
//   const { products } = useContext(ProductsContext);

//   return (
//     <div className="container">
//       <Suspense fallback={<Loading />}>
//         <SearchBar />
//         <Row className="mt-4">
//           {products.map((pro, index) => (
//             <Col>
//               <Card style={{ width: "18rem", marginBottom: "20px" }}>
//                 <Card.Img variant="top" src={pro.images} />
//                 <Card.Body>
//                   <Card.Title>Card Title</Card.Title>
//                   <Card.Text>
//                     Some quick example text to build on the card title and make
//                     up the bulk of the card's content.
//                   </Card.Text>
//                 </Card.Body>
//                 <ListGroup className="list-group-flush">
//                   <ListGroup.Item>Cras justo odio</ListGroup.Item>
//                   <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
//                   <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
//                 </ListGroup>
//                 <Card.Body>
//                   <Card.Link href="#">Card Link</Card.Link>
//                   <Card.Link href="#">Another Link</Card.Link>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       </Suspense>
//     </div>
//   );
// }

// export default ProductDisplay;


import React, { lazy, Suspense, useContext, useState } from "react";
import SearchBar from "../components/SearchBar";
import Loading from "../components/Loading";
import ListGroup from "react-bootstrap/ListGroup";
import { Card, Col, Row, Pagination, Button } from "react-bootstrap";
import { ProductsContext } from "../contexts/ProductsContext";

const ProductList = lazy(() => import("../components/ProductList"));

function ProductDisplay() {
  const { products } = useContext(ProductsContext);

  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8; // Number of products per page

  // Calculate indices for slicing products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Calculate total pages
  const totalPages = Math.ceil(products.length / productsPerPage);

  // Handle pagination click
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container">
      <Suspense fallback={<Loading />}>
        <SearchBar/>
        <Row className="mt-4">
          {/* Render only the current page's products */}
          {currentProducts.map((pro, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4">
              <Card style={{ width: "18rem", marginBottom: "20px" }}>
                <Card.Img variant="top" src={pro.images} />
                <Card.Body>
                  <Card.Title>{pro.title}</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>Price: ${pro.price}</ListGroup.Item>
                  <ListGroup.Item>Category: {pro.category}</ListGroup.Item>
                  <ListGroup.Item>Category: {pro.tags.join(",")}</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                  <Button href="#">Details</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Pagination Controls */}
        <Pagination className="justify-content-center">
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
      </Suspense>
    </div>
  );
}

export default ProductDisplay;
