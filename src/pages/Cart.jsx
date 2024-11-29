import React, { useContext, useEffect } from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";
import { OrderContext } from "../contexts/OrderContext";
import CartProductCard from "../components/CartProductCard";
import CartHeader from "../components/CartHeader";

function Cart() {
  const { cart } = useContext(CartContext);
  const { order, setOrder } = useContext(OrderContext);

  useEffect(() => {
    let total = 0;
    order.products.forEach((product) => {
      total += product.price * product.quantity;
    });
    setOrder((prevOrder) => ({ ...prevOrder, total: total }));
  }, [order.products, setOrder]);

  return (
    <Container className="mt-4">
      <h2>Your Cart</h2>
      <CartHeader />
      <Container>
        {cart.length > 0 ? (
          cart.map((product) => (
            <Row key={product.id}>
              <CartProductCard product={product} />
            </Row>
          ))
        ) : (
          <p>Your cart is empty!</p>
        )}
      </Container>
      <Container className="fixed-bottom">
        <Row className="bg-white">
          <Col>
            <h3>Total Price: ${calculateTotalPrice().toFixed(2)}</h3>
          </Col>
          <Col className="d-flex justify-content-end align-items-center">
          <div>You select {order.products.length} product(s)</div>
            <Button variant="warning" as={Link} to="/checkout">Checkout</Button>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Cart;
