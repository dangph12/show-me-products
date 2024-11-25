import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import routes from "../routes";


function HomePage() {
  const categories = [
    {
      name: "beauty",
      imgSrc:
        "https://ir.ebaystatic.com/cr/v/c01/01_PopularDestination_Luxury.jpg",
    },
    {
      name: "fragrances",
      imgSrc:
        "https://ir.ebaystatic.com/cr/v/c01/02_PopularDestination_Sneakers.jpg",
    },
    {
      name: "furniture",
      imgSrc:
        "https://ir.ebaystatic.com/cr/v/c01/03_PopularDestination_Tire.jpg",
    },
    {
      name: "groceries",
      imgSrc:
        "https://ir.ebaystatic.com/cr/v/c01/ECM_PopularDestination_Reburbished.jpg",
    },
    {
      name: "home-decoration",
      imgSrc:
        "https://ir.ebaystatic.com/cr/v/c01/05_PopularDestination_Cards.jpg",
    },
    {
      name: "kitchen-accessories",
      imgSrc:
        "https://ir.ebaystatic.com/cr/v/c01/06_PopularDestination_PreLoved.jpg",
    },
    {
      name: "laptops",
      imgSrc:
        "https://ir.ebaystatic.com/cr/v/c01/07_PopularDestination_Toys.jpg",
    },
    {
      name: "mens-shirts",
      imgSrc:
        "https://ir.ebaystatic.com/cr/v/c01/07_PopularDestination_Toys.jpg",
    },
    {
      name: "mens-shoes",
      imgSrc:
        "https://ir.ebaystatic.com/cr/v/c01/07_PopularDestination_Toys.jpg",
    },
    {
      name: "mens-watches",
      imgSrc:
        "https://ir.ebaystatic.com/cr/v/c01/07_PopularDestination_Toys.jpg",
    },
    {
      name: "mobile-accessories",
      imgSrc:
        "https://ir.ebaystatic.com/cr/v/c01/07_PopularDestination_Toys.jpg",
    },
    {
      name: "motorcycle",
      imgSrc:
        "https://ir.ebaystatic.com/cr/v/c01/07_PopularDestination_Toys.jpg",
    },
    {
      name: "skin-care",
      imgSrc:
        "https://ir.ebaystatic.com/cr/v/c01/07_PopularDestination_Toys.jpg",
    },
    {
      name: "smartphones",
      imgSrc:
        "https://ir.ebaystatic.com/cr/v/c01/07_PopularDestination_Toys.jpg",
    },
    {
      name: "sports-accessories",
      imgSrc:
        "https://ir.ebaystatic.com/cr/v/c01/07_PopularDestination_Toys.jpg",
    },
    {
      name: "sunglasses",
      imgSrc:
        "https://ir.ebaystatic.com/cr/v/c01/07_PopularDestination_Toys.jpg",
    },
    {
      name: "tablets",
      imgSrc:
        "https://ir.ebaystatic.com/cr/v/c01/07_PopularDestination_Toys.jpg",
    },
    {
      name: "tops",
      imgSrc:
        "https://ir.ebaystatic.com/cr/v/c01/07_PopularDestination_Toys.jpg",
    },
    {
      name: "vehicle",
      imgSrc:
        "https://ir.ebaystatic.com/cr/v/c01/07_PopularDestination_Toys.jpg",
    },
    {
      name: "womens-bags",
      imgSrc:
        "https://ir.ebaystatic.com/cr/v/c01/07_PopularDestination_Toys.jpg",
    },
    {
      name: "womens-dresses",
      imgSrc:
        "https://ir.ebaystatic.com/cr/v/c01/07_PopularDestination_Toys.jpg",
    },
    {
      name: "womens-jewellery",
      imgSrc:
        "https://ir.ebaystatic.com/cr/v/c01/07_PopularDestination_Toys.jpg",
    },
    {
      name: "womens-shoes",
      imgSrc:
        "https://ir.ebaystatic.com/cr/v/c01/07_PopularDestination_Toys.jpg",
    },
    {
      name: "womens-watches",
      imgSrc:
        "https://ir.ebaystatic.com/cr/v/c01/07_PopularDestination_Toys.jpg",
    },
  ];

  return (
    <div className="container">
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

      <Container className="text-center my-5" style={{}}>
        <h2>Explore Popular Categories</h2>
        <Row className="mt-4">
          {categories.map((category, index) => (
            <Col key={index} xs={6} sm={4} md={3} lg={2} className="mb-4">
              <div className="category-item">
                <img
                  src={category.imgSrc}
                  alt={category.name}
                  className="rounded-circle"
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                  }}
                />
                {/* {routes.map((route,index) => (
                   <p className="mt-2">{route.category}</p>
                ))} */}
                <p className="mt-2">{category.name}</p>
              </div>
            </Col>
          ))}
         
        </Row>
      </Container>
    </div>
  );
}

export default HomePage;
