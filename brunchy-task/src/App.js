import './App.css';
import Header from './components/Header'
import Info from './components/Info'
import Items from './components/Items'
import Order from './components/Order'

function App() {
  return (
    <div className='containerB'>
      <Header/>
      <Info/>
      <Items/>
      {/* <Order/> */}
    </div>
  );
}

export default App;
