import React, { useContext, useState } from "react";
import { ProductsContext } from "../contexts/ProductsContext";
import { CartContext } from "../contexts/CartContext";
import { useParams,Link } from "react-router-dom";
import { Card, Button, Form } from "react-bootstrap";

function ProductDetail() {
  const { products } = useContext(ProductsContext);
  const { cart, setCart } = useContext(CartContext);
  const { id } = useParams();
  const product = products.find((prod) => prod.id === parseInt(id));
  const { addToCart } = useContext(CartContext);
  // State to handle quantity
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <h2>Product not found</h2>;
  }

  
  
  const handleQuantityChange = (e) => {
    const value = Math.max(1, Math.min(e.target.value, product.stock || 10));
    setQuantity(value);
  };

  const handleAddToCart = () => {
    addToCart(product, parseInt(quantity)); 
    alert(`${quantity} item(s) added to cart!`);
    
  };


  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <div className="mb-3">
            <img
              src={product.images[0]}
              alt={product.title}
              className="img-fluid"
            />
          </div>
          <div className="d-flex">
            {product.images.map((image, idx) => (
              <img
                key={idx}
                src={image}
                alt={`${product.title} ${idx}`}
                className="img-thumbnail me-2"
                style={{ width: "70px", height: "70px", cursor: "pointer" }}
              />
            ))}
          </div>
        </div>

        
        <div className="col-md-6">
          <h3>{product.title}</h3>
          <p>
            <strong>Condition:</strong> {product.condition}
          </p>
          <h4 style={{ color: "green" }}>{product.price}</h4>
          <p>
            <strong>Description:</strong> {product.description}
          </p>
          <p>
            <strong>Category:</strong> {product.category}
          </p>
          <p>
            <strong>Rating:</strong> {product.rating}⭐
          </p>
          <p>
            <strong>Stock:</strong> {product.stock > 0 ? product.stock : "Out of stock"}
          </p>

          {/* Quantity Input */}
          <div className="container mt-4">
      {/* ... other product details ... */}
      <Form.Group controlId="quantity" className="mb-3">
        <Form.Label>Quantity:</Form.Label>
        <Form.Control
          type="number"
          value={quantity}
          onChange={handleQuantityChange}
          min="1"
          max={product.stock || 10}
          style={{ width: "100px" }}
        />
      </Form.Group>
      <Button as={Link} to={`/cart`} 
        variant="primary"
        className="w-100 mb-2"
        onClick={handleAddToCart}
        disabled={product.stock < 1}
        
        
      >
        Add to Cart
      </Button>
    </div>

          {/* Additional Information */}
          <p className="mt-3 text-muted">
            <i>56 items sold · 68 people are watching this</i>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
