import React, { useEffect, useState } from "react";
import axios from "axios";
import MainLayout from "../layout/MainLayout";


function ProductDisplay() {
  const [products, setProducts] = useState([]);

  const url = process.env.REACT_APP_API_PATH;
  useEffect(() => {
    axios.get(`${url}/products`).then((res) => {
      setProducts(res.data);
    }); 
  }, [url]);

  return (
    <MainLayout>
      {products.map((product, idx) => (
        <div key={idx + product.title}>
          <h2>{product.title}</h2>
        </div>
      ))}
      </MainLayout>
  );
}

export default ProductDisplay;
