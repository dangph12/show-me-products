import React from "react";
import { Container, Navbar, Nav, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { FaBell, FaShoppingCart } from "react-icons/fa";

function Header() {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Col>
          <Link to="/">
          <img
            style={{ width: "100px" }}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/EBay_logo.svg/800px-EBay_logo.svg.png"
          ></img>
          </Link>
          </Col>
          <Col>
            <Nav className="me-auto">
              <Nav.Link  key="product" as={Link} to="/products">Product</Nav.Link>
            </Nav>
            </Col>
            <Col>
            <Nav className="me-auto">
              <Nav.Link  key="cart" as={Link} to="/cart">Cart</Nav.Link>
            </Nav>
            </Col>
            <Col>
            <Nav className="me-auto">
              <Nav.Link  key="history" as={Link} to="/order-history">History</Nav.Link>
            </Nav>
            </Col>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
