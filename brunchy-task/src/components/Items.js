import data from '../data.json';
import '@splidejs/splide/dist/css/splide.min.css'
import {Splide, SplideSlide} from '@splidejs/react-splide'


const Items = () => {

  return (
    <div>
        <ul>
          <Splide options={{
            arrows: false,
            drag: "free",
            gap: "5rem"
          }}>
            {data.items.map((item, idx) => (
                  <li key={idx} className='items'>{item.name} <br></br>{item.caption}<br></br> ${item.price} <img src='1.png'></img></li>
            ))}
          </Splide>
        </ul>
    </div>
  )
}

export default Items
