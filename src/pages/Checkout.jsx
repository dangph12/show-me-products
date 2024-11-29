import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { OrderContext } from "../contexts/OrderContext";
import { OrderHistoryContext } from "../contexts/OrderHistoryContext";
import { CartContext } from "../contexts/CartContext";
import { Container, Col, Row, Button } from "react-bootstrap";

function Checkout() {
  const [isFulfilled, setIsFulfilled] = useState(false);
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

  return (
    <Container fluid className="px-5 mt-4">
      <Row>
        <Col>
          <h2>Customer Information</h2>
          <form>
            <label>
              Name:
              <input
                type="text"
                value={order.customer.name}
                onChange={(e) =>
                  setOrder({
                    ...order,
                    customer: { ...order.customer, name: e.target.value },
                  })
                }
              />
            </label>
            <label>
              Address:
              <input
                type="text"
                value={order.customer.address}
                onChange={(e) =>
                  setOrder({
                    ...order,
                    customer: { ...order.customer, address: e.target.value },
                  })
                }
              />
            </label>
            <label>
              Phone:
              <input
                type="text"
                value={order.customer.phone}
                onChange={(e) =>
                  setOrder({
                    ...order,
                    customer: { ...order.customer, phone: e.target.value },
                  })
                }
              />
            </label>
          </form>
          <Button variant="warning" as={Link} to="/cart">
            Back to Cart
          </Button>
          {isFulfilled ? (
            <Button
              variant="success"
              onClick={() => {
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
                  prevCart.filter(
                    (cartProduct) => !order.products.includes(cartProduct)
                  )
                );
              }}
            >
              Place Order
            </Button>
          ) : (
            <Button variant="secondary" disabled>
              Place Order
            </Button>
          )}
        </Col>
        <Col>
          <h2>Products</h2>
          <ul>
            {order.products.map((product) => (
              <li key={product.id}>
                {product.title} - {product.price}
              </li>
            ))}
          </ul>
          <div>{order.total}</div>
        </Col>
      </Row>
    </Container>
  );
}

export default Checkout;
