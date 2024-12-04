import React, { useContext } from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import { ProductsContext } from "../contexts/ProductsContext";

function HomePage() {
  const { products } = useContext(ProductsContext);

  const uniqueProducts = Array.from(
    products
      .reduce((map, product) => {
        if (!map.has(product.category)) {
          map.set(product.category, product); // Add the product if its category is not in the map
        }
        return map;
      }, new Map())
      .values()
  );

  return (
    <div className="" style={{marginTop: "", width: "100%"}}>
      {/* Carousel Section */}
      <div className="">
        <Carousel fade>
        <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://i.ebayimg.com/images/g/uMIAAOSw~SFnDRfj/s-l1600.webp"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://cedcommerce.com/blog/wp-content/uploads/2021/03/blog-banner-3.jpg"
              alt="First slide"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.a2xaccounting.com/img/content/ebay.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>

      {/* Categories Section */}
      <Container className="text-center my-5">
        <h2>Explore Popular Categories</h2>
        <Row className="mt-4">
          <div className="row">
            {/* Step 2: Display unique product thumbnails */}
            {uniqueProducts.map((pro, index) => (
              <div
                key={index}
                className="col-xs-6 col-sm-4 col-md-3 col-lg-2 mb-4"
              >
                <img
                  src={pro.thumbnail}
                  alt={pro.category}
                  className="rounded-circle"
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                  }}
                />
                <h6 className="mt-2 text-center">{pro.category}</h6>
              </div>
            ))}
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default HomePage;
