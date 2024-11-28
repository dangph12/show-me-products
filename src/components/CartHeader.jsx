import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function CartHeader() {
  return (
    <Container>
      <Row>
        <Col>Select</Col>
        <Col>Product</Col>
        <Col>
          <p>Price</p>
        </Col>
        <Col>
          <p>Quantity</p>
        </Col>
        <Col>
          <p>Total</p>
        </Col>
      </Row>
    </Container>
  );
}

export default CartHeader;
