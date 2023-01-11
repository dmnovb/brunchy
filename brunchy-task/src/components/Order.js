import React, { useEffect } from 'react'
import basket from '../assets/shopping-basket .png'
import {useState} from 'react'


const Order = (props) => {
  props.cartItems.map(item => {
    console.log(item.name)
  })
  console.log(props.cartItems)

  

  return (
    <div className='order-container'>
      <div className='order'>
          <button type='button' data-toggle="modal" data-target="#exampleModalCenter" ><img className='basket' src={basket}></img></button>
              <p id='cart-price'>$ {props.total}</p>
          <button id='order-button'>Order Now</button>
      </div>    
      <div>
        <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-body">
                {props.cartItems.map(item => {
                  <p>{item.name}</p>
                })}
              </div>
              <div className="modal-footer">
                <p className='order-total'>Total {props.total}</p>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
  )
}

export default Order;