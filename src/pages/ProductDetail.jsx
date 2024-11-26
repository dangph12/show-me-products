import React, { useContext } from "react";
import { ProductsContext } from "../contexts/ProductsContext";
import { CartContext } from "../contexts/CartContext";
import { useParams, Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

function ProductDetail() {
  const { products } = useContext(ProductsContext);
  const { cart, setCart } = useContext(CartContext);
  const { id } = useParams();
  const product = products.find((prod) => prod.id === parseInt(id));

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <Card className="m-3">
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          <strong>Description:</strong> {product.description}
        </Card.Text>
        <div>
          {product.images.map((image, idx) => (
            <div key={idx} className="mb-2">
              <img
                src={image}
                alt={product.title}
                style={{ width: "100%", maxHeight: "300px", objectFit: "cover" }}
              />
            </div>
          ))}
        </div>
        <Card.Text>
          <strong>Category:</strong> {product.category}
        </Card.Text>
        <Card.Text>
          <strong>Price:</strong> {product.price}
        </Card.Text>
        <Card.Text>
          <strong>Rating:</strong> {product.rating}
        </Card.Text>
        
        <Button
          as={Link}
          to="/cart"
          variant="primary"
          onClick={() => setCart([...cart, product])}
        >
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductDetail;
