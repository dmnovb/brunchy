import React, { useEffect } from 'react'
import basket from '../assets/basket.png'
import {useState} from 'react'


const Order = (props) => {
  // console.log(props.setCartItems)
  const handleSubmitOrder = () => {
    props.setCartItems([])
    props.setTotal(0)
   
  } 
  
  return (
    <div className='order-container'>
      <div className='order'>
          <button type='button' data-toggle="modal" data-target="#exampleModalCenter" ><img className='basket' src={basket}></img></button>
              <p id='cart-price'>$ {props.total}</p>
          <button onClick={() => handleSubmitOrder()} id='order-button'>Order Now</button>
      </div>    
      <div>
        <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <ul className='cart-items'>
                  {props.cartItems.map(item => (
                    <div className='items-container'>
                    <p>{item.name}</p>
                    <p className='item-price'> <span>$</span> {item.price}</p>
                    </div>
                    
                  ))}
                </ul>
              </div>
              <div className='modal-footer'>
                <div className="modal-footer-container">
                  <p className='total-text'>Total</p>
                  <p id='total'><span>$ </span>{props.total}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
  )
}

export default Order;