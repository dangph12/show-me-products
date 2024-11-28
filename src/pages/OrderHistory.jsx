import React, { useContext } from 'react'
import { OrderHistoryContext } from "../contexts/OrderHistoryContext";

function OrderHistory() {
  const { orderHistory } = useContext(OrderHistoryContext);
  return (
    <>
      <h1>Order History</h1>
      <ul>
        {orderHistory.map((order, index) => (
          <li key={index}>
            <h2>Order {index + 1}</h2>
            <p>Name: {order.customer.name}</p>
            <p>Address: {order.customer.address}</p>
            <p>Phone: {order.customer.phone}</p>
            <h3>Products</h3>
            <ul>
              {order.products.map((product) => (
                <li key={product.id}>
                  {product.title} - {product.price}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </>
  )
}

export default OrderHistory