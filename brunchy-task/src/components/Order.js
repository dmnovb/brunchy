import React from 'react'
import basket from '../assets/shopping-basket .png'

const Order = () => {
  return (
    <div className='order-container'>
      <div className='order'>
          <button> <img className='basket' src={basket}></img></button>
          <p id='cart-price'>$0.00</p>
          <button id='order-button'>Order Now</button>
      </div>
    </div>
  )
}

export default Order;