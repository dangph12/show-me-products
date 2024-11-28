import React, { useContext } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { OrderContext } from "../contexts/OrderContext";

function CartProductCard({ product }) {
  const { order, setOrder } = useContext(OrderContext);

  return (
    <Container>
      <Row>
        <Col>
          <input
            type="checkbox"
            checked={order.products.includes(product)}
            onChange={(e) => {
              if (e.target.checked) {
                setOrder({
                  ...order,
                  products: [...order.products, product],
                });
              } else {
                setOrder({
                  ...order,
                  products: order.products.filter(
                    (orderProduct) => orderProduct !== product
                  ),
                });
              }
            }}
          ></input>
        </Col>
        <Col>
          <div>
            <img
              src={product.thumbnail}
              alt={product.title}
              style={{ width: "80px" }}
            />
            <a>{product.title}</a>
          </div>
        </Col>
        <Col>
          <p>{product.price}</p>
        </Col>
        <Col>
          <p>{product.quantity}</p>
        </Col>
        <Col>
          <p>
            {(
              (typeof product.price === "string"
                ? parseFloat(product.price.replace("$", ""))
                : product.price) * product.quantity
            ).toFixed(2)}
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default CartProductCard;
