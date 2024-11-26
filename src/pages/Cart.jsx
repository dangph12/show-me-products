import React from 'react'
import { CartContext } from '../contexts/CartContext'
import { useContext } from 'react'
function Cart() {
  const { cart } = useContext(CartContext);
  return (
    <>
    {cart.map((product) => (
      <div key={product.id}>
        <img src={product.images[0]} alt={product.title} />
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>{product.price}</p>
      </div>
      
    ))}
    </>
  )
}

export default Cart