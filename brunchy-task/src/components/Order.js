import { isDisabled } from '@testing-library/user-event/dist/utils'
import React from 'react'
import basket from '../assets/basket.png'


const Order = ({cartItems, total, setTotal, setCartItems}) => {
  const handleSubmitOrder = () => {
    setCartItems([])
    setTotal(0)
  } 
  return (
    <div className='order-container'>
      <div className='order'>
          <button type='button' data-toggle="modal" data-target="#cartModal" ><img className='basket' src={basket}></img></button>
              <p id='cart-price'>$ {total}</p>
          {cartItems.length > 0 && 
          <button type='button' data-toggle="modal" data-target="#checkoutModal" 
          onClick={() => handleSubmitOrder()} 
          id='order-button' >Order Now</button>}
          { cartItems.length == 0 && <button type='button' data-toggle="modal" data-target="#checkoutModal" disabled id='disabled-button'>Order Now</button>}
      </div>    
      <div>
        <div className="modal fade" id="cartModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <ul className='cart-items'>
                  {cartItems.map(item => (
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
                  <p id='total'><span>$ </span>{total}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade" id="checkoutModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <h1>Congratulations!</h1>
                <h2>Your order is on it's way.</h2>
                <button data-dismiss="modal">Ok</button>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Order;