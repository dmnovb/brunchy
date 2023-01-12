import data from '../data.json';
import {useState} from 'react'
import '@splidejs/splide/dist/css/splide.min.css'
import {Splide, SplideSlide} from '@splidejs/react-splide'
import basket from '../assets/basket.png'
import Order from './Order';

const Items = () => {

  const [cartItems, setCartItems] = useState([])
  const [total, setTotal] = useState(0)

  const handleItems = (item) => {
    setCartItems([...cartItems, item])
    setTotal(total + item.price)
  }
   
  
  return (
    <div>
        <ul>
          <Splide options={{
            arrows: false,
            drag: "free",
            gap: "5rem"
          }}>
            
            {data.items.map((item, idx) => (
              <li key={idx} className='itemsB'> 
                  {item.name} <br></br><span> {item.caption} </span> <br></br> <div>
                  <span className='dollar-sign-span'>$ </span>{item.price}
                  </div>                   
                      <button onClick={() => handleItems(item)}>  
                  
                  <img className='basket-image' src={basket}></img>
                  </button>
                  </li>
            ))}
            
          </Splide>
        </ul>
        <Order cartItems={cartItems} total={total} setTotal={setTotal} setCartItems={setCartItems}/> 

       
    </div>
  )
}

export default Items
