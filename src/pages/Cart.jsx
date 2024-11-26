import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

function Cart() {
  const { cart } = useContext(CartContext);

  const calculateTotalPrice = () => {
    return cart.reduce((total, product) => {
      const price = typeof product.price === "string" 
        ? parseFloat(product.price.replace("$", "")) 
        : product.price;

      return total + price * product.quantity;
    }, 0);
  };

  return (
    <div className="container mt-4">
      <h2>Your Cart</h2>
      {cart.length > 0 ? (
        cart.map((product) => (
          <div key={product.id} className="mb-4">
            <img
              src={product.images[0]}
              alt={product.title}
              style={{ width: "100px", height: "100px", objectFit: "cover" }}
            />
            <h4>{product.title}</h4>
            <p>{product.description}</p>
            <p>Price: {product.price}</p>
            <p>Quantity: {product.quantity}</p>
            <p>Total: ${(
              (typeof product.price === "string"
                ? parseFloat(product.price.replace("$", ""))
                : product.price) * product.quantity
            ).toFixed(2)}</p>
          </div>
        ))
      ) : (
        <p>Your cart is empty!</p>
      )}

      <h3>Total Price: ${calculateTotalPrice().toFixed(2)}</h3>
    </div>
  );
}

export default Cart;
