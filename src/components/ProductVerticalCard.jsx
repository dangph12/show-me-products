import React from 'react'
import { Card } from 'react-bootstrap'

function ProductVerticalCard({ product }) {
  return (
    <Card className="text-center">
        <Card.Img variant='top' src={product.thumbnail} alt={product.title} />
        <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text className='text-danger text-decoration-line-through'>{product.price}</Card.Text>
        </Card.Body>
    </Card>
  )
}

export default ProductVerticalCard