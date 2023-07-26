import React from 'react'
import "../style/products.css"
import icon from "../resources/img/shopping-cart.png"
const Cart = () => {
  return (
    <div className='container'>
      <p className='cart'>
        <img src={icon} id='icon' />
        Your Cart
      </p>
      <div className='current-products'>

      </div>
    </div>
  )
}

export default Cart