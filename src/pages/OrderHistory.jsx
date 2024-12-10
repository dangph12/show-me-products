import React, { useContext, useEffect } from 'react'
import { OrderHistoryContext } from "../contexts/OrderHistoryContext";
import { Container, Row, Col, Table } from "react-bootstrap";

function OrderHistory() {
  const { orderHistory } = useContext(OrderHistoryContext);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container fluid className="px-5 mt-4">
      <h1>Order History</h1>
      <Table striped hover bordered>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Products</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {orderHistory.map((order, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{order.customer.name}</td>
              <td>{order.customer.address}</td>
              <td>{order.customer.phone}</td>
              <td>
                <ul>
                  {order.products.map((product) => (
                    <li key={product.id}>
                      {product.title} - {product.quantity} - {product.price}
                    </li>
                  ))}
                </ul>
              </td>
              <td>${order.total}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  )
}

export default OrderHistory