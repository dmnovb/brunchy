import data from '../data.json';
import {useState} from 'react'
import '@splidejs/splide/dist/css/splide.min.css'
import {Splide, SplideSlide} from '@splidejs/react-splide'
import basket from '../assets/shopping-basket .png'
import Order from './Order';

const Items = () => {
  console.log(data.items)

  const [cartItems, setCartItems] = useState([])

  const handleItems = (id) => {
    setCartItems([...cartItems, id])
    // cartItems.push(id)
  }

  console.log(cartItems)
  

  return (
    <div>
        <ul>
          <Splide options={{
            arrows: false,
            drag: "free",
            gap: "5rem"
          }}>
            {data.items.map((item, idx) => (
                  <li key={idx} className='items'> 
                   {item.name} <br></br><span> {item.caption} </span> <br></br> <div>
                  <span>$ </span>{item.price}
                  </div> 
                  {/* <img className='basket-image' src={basket}></img> */}
                  <button onClick={() => handleItems(item)}>add to cart</button>
                  </li>
            ))}
            
          </Splide>
        </ul>
    </div>
  )
}

export default Items
