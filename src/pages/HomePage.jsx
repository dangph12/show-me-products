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
    <div className="container">
      {/* Carousel Section */}
      <div className="container">
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://i.ebayimg.com/images/g/JeAAAOSw4sRnDTsr/s-l1600.webp"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.a2xaccounting.com/img/content/ebay.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://channelgrabber.com/wp-content/uploads/2020/05/Stand-out-on-eBay-no-custom-shopfront-banner-2.png"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
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
