import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { OrderContext } from "../contexts/OrderContext";
import { OrderHistoryContext } from "../contexts/OrderHistoryContext";
import { CartContext } from "../contexts/CartContext";
import { Container, Col, Row, Button, Form, Image } from "react-bootstrap";

function Checkout() {
  const navigate = useNavigate();
  const [isFulfilled, setIsFulfilled] = useState(false);
  const [validated, setValidated] = useState(false);
  const { order, setOrder } = useContext(OrderContext);
  const { orderHistory, setOrderHistory } = useContext(OrderHistoryContext);
  const { setCart } = useContext(CartContext);

  useEffect(() => {
    if (
      order.customer.name !== "" &&
      order.customer.address !== "" &&
      order.customer.phone !== "" &&
      order.products.length > 0
    ) {
      setIsFulfilled(true);
    } else {
      setIsFulfilled(false);
    }
  }, [order, setOrder]);

  const handleSubmit = () => {
    setOrderHistory([...orderHistory, order]);
    setOrder({
      customer: {
        name: "",
        address: "",
        phone: "",
      },
      products: [],
      total: 0,
    });
    setCart((prevCart) =>
      prevCart.filter((cartProduct) => !order.products.includes(cartProduct))
    );
    setValidated(true);
    navigate("/order-history");
  };

  return (
    <Container fluid className="px-5 mt-4">
      <Row>
        <Col>
          <Row className="mt-4">
            <h2>Customer Information</h2>
          </Row>
          <Row className="mt-4">
            <Form noValidate validated={validated} key="order">
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  value={order.customer.name}
                  onChange={(e) =>
                    setOrder({
                      ...order,
                      customer: { ...order.customer, name: e.target.value },
                    })
                  }
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a name.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="formAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  required
                  type="text"
                  value={order.customer.address}
                  onChange={(e) =>
                    setOrder({
                      ...order,
                      customer: { ...order.customer, address: e.target.value },
                    })
                  }
                />
                <Form.Control.Feedback type="invalid">
                  Please provide an address.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="formPhone">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  required
                  type="text"
                  value={order.customer.phone}
                  onChange={(e) =>
                    setOrder({
                      ...order,
                      customer: { ...order.customer, phone: e.target.value },
                    })
                  }
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a phone number.
                </Form.Control.Feedback>
              </Form.Group>
            </Form>
          </Row>
          <Row className="my-4">
            <Col>
              <Button variant="warning" as={Link} to="/cart">
                Back to Cart
              </Button>
            </Col>
            <Col className="d-flex justify-content-end">
              {isFulfilled ? (
                <Button
                  variant="success"
                  type="submit"
                  onClick={() => handleSubmit()}
                >
                  Place Order
                </Button>
              ) : (
                <Button variant="secondary" disabled>
                  Place Order
                </Button>
              )}
            </Col>
          </Row>
        </Col>
        <Col>
          <Row className="mt-4">
            <h2>Total Price: ${order.total.toFixed(2)}</h2>
          </Row>
          <Row className="mt-4">
            <Container>
              {order.products.map((product) => (
                <Row
                  className="d-flex align-items-center justify-content-center"
                  key={product.id}
                >
                  <Col className="d-flex align-items-center" lg={7}>
                    <div>
                      <Image
                        src={product.thumbnail}
                        alt={product.title}
                        style={{ width: "80px" }}
                        className="mx-2"
                      />
                    </div>
                    <p className="mx-2 inline">{product.title}</p>
                  </Col>
                  <Col className="d-flex align-items-center justify-content-center">
                    <p>Quantity: {product.quantity}</p>
                  </Col>
                  <Col className="d-flex align-items-center justify-content-center">
                    <p>Price: ${product.price.toFixed(2) * product.quantity}</p>
                  </Col>
                </Row>
              ))}
            </Container>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Checkout;
