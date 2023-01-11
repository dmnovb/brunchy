import React from 'react'
import '../App.css';
import deliveryIcon from '../assets/delivery.png'

const Header = () => {
  return (
    <div className='header-container'>
      <h1 className='header-name'>BRUNCHY</h1>
      <ul className='about'>
          <li>
            <a href='https://www.dreamshot.bg/'>
              About
            </a>
          </li>
          <li>
          <a href='https://www.dreamshot.bg/'>
              Call us
            </a>
          </li>
          <li>
              Free Delivery
          </li>
          <li>
            <img src={deliveryIcon}></img>
          </li>
      </ul>
    </div>
  )
}

export default Header;