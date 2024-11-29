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
    <Container fluid className="px-5 mt-4">
      {cart.length <= 0 ? (
        <Row>
          <h2 className="mx-2">Your Cart is Empty</h2>
        </Row>
      ) : (
        <>
          <Row>
            <h2 className="mx-2">Your Cart</h2>
          </Row>
          <Row>
            <CartHeader />
          </Row>
          <Row>
            <Container>
              {cart.map((product) => (
                <Row key={product.id}>
                  <CartProductCard product={product} />
                </Row>
              ))}
            </Container>
          </Row>
        </>
      )}
    </Container>
  );
}

export default Cart;
