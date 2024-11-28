import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  
  const addToCart = (product, quantity) => {
    setCart((prevCart) => {
      
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        
        return [...prevCart, { ...product, quantity }];
      }
    });
  };

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;