import React, { useContext } from 'react'
import { OrderContext } from "../contexts/OrderContext";
import { OrderHistoryContext } from "../contexts/OrderHistoryContext";
import { CartContext } from "../contexts/CartContext";

function Checkout() {
  const { order, setOrder } = useContext(OrderContext);
  const { orderHistory, setOrderHistory } = useContext(OrderHistoryContext);
  const { setCart } = useContext(CartContext);

  return (
    <>
      <h1>Checkout</h1>
      <p>Name: {order.customer.name}</p>
      <p>Address: {order.customer.address}</p>
      <p>Phone: {order.customer.phone}</p>
      <h2>Products</h2>
      <ul>
        {order.products.map((product) => (
          <li key={product.id}>
            {product.title} - {product.price}
          </li>
        ))}
      </ul>
      <button
        onClick={() => {
          setOrderHistory([...orderHistory, order]);
          setOrder({
            customer: {
              name: "",
              address: "",
              phone: "",
            },
            products: [],
          });
          setCart((prevCart) => prevCart.filter((cartProduct) => !order.products.includes(cartProduct)));
        }}
      >
        Place Order
      </button>
    </>
  )
}

export default Checkout