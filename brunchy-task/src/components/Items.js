import data from '../data.json';
import {useState} from 'react'
import '@splidejs/splide/dist/css/splide.min.css'
import {Splide, SplideSlide} from '@splidejs/react-splide'
import basket from '../assets/basket.png'
import Order from './Order';
import bp from '../assets/1.png'
import ac from '../assets/2.png'
import sy from '../assets/3.png'
import pt from '../assets/4.png'
import ft from '../assets/5.png'
import bb from '../assets/6.png'
import cw from '../assets/7.png'


const Items = () => {
  const images = [bp, ac, sy, pt, ft, bb, cw]
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
            pagination: false,
            perPage: '4',
            focus: '0',
            drag: "free",
          }}>
            {data.items.map((item, idx) => (
            <SplideSlide style={{display: 'flex'}}>
              <li key={idx} className='itemsB'>
                  <img className='item-images' src={images[idx]}/> 
                  {item.name} <br></br><span> {item.caption} </span> <br></br> <div>
                  <span className='dollar-sign-span'>$ </span>{item.price}
                  </div>                   
                      <button onClick={() => handleItems(item)}>
                  <img className='basket-image' src={basket}></img>
                  </button>
              </li>
            </SplideSlide>
            ))}
          </Splide>
        </ul>
        <Order cartItems={cartItems} total={total} setTotal={setTotal} setCartItems={setCartItems}/> 
    </div>
  )
}

export default Items
