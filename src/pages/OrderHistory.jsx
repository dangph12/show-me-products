import React, { useContext } from 'react'
import { OrderHistoryContext } from "../contexts/OrderHistoryContext";
import { Container, Row, Col } from "react-bootstrap";

function OrderHistory() {
  const { orderHistory } = useContext(OrderHistoryContext);
  return (
    <Container fluid className="px-5 mt-4">
      <h1>Order History</h1>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Products</th>
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
                      {product.title} - {product.price}
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  )
}

export default OrderHistory