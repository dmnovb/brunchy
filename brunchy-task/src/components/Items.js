import data from '../data.json';
import {useState} from 'react'
import '@splidejs/splide/dist/css/splide.min.css'
import {Splide, SplideSlide} from '@splidejs/react-splide'
import basket from '../assets/basket.png'
import Order from './Order';

const Items = () => {

  const [cartItems, setCartItems] = useState([])
  const [itemsCount, setItemsCount] = useState(0)
  const [total, setTotal] = useState(0)

  const handleItems = (item) => {
    setCartItems([...cartItems, item])
    // if(item.name === item.name){
    //   setItemsCount(itemsCount + 1)
    // }
    setTotal(total + item.price)
  }
   
  console.log(itemsCount)

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
                  <img src={item.image}/> 
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
