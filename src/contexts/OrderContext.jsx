import React, { createContext, useState } from "react";

export const OrderContext = createContext();

function OrderProvider({ children }) {
  const [order, setOrder] = useState({
    customer: {
      name: "",
      address: "",
      phone: "",
    },
    products: [],
  });
  return (
    <OrderContext.Provider value={{ order, setOrder }}>
      {children}
    </OrderContext.Provider>
  );
}

export default OrderProvider;
