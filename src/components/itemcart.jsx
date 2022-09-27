import React from 'react'

const Itemcart = ({product}) => {
  return (
    <div>
      <img src={product.image} alt={product.title} />
        <div>
            <p>Titulo: {product.title}</p>
            <p>Cantidad: {product.quantity}</p>
            <p>Precio u.: {product.price}</p>
            <p>Subtotal: {product.quantity * product.price}</p>
        </div>
    </div>
  )
}

export default Itemcart
