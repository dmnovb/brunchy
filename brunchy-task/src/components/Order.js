import React from 'react'
import basket from '../assets/shopping-basket .png'

const Order = () => {
  return (
    <div className='order-container'>
      <div className='order'>
          <img className='basket' src={basket}></img>
          <p id='cart-price'>$0.00</p>
          <button>Order Now</button>
      </div>
    </div>
  )
}

export default Order