import './App.css';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import { useState } from 'react';
import Cart from './components/Cart/Cart';


function App() {

  const [cartIsShown,setCartIsShown]=useState(false);

  const showCartHandler =()=>{
    setCartIsShown(true)
  }
  const hideCartHandler =()=>{
    setCartIsShown(false);
  }

  return (
    <>
      <Header onShowCart={showCartHandler}/>
      {cartIsShown && <Cart onCloseCart={hideCartHandler}/>}
      <Body></Body>
    </>
  );
}

export default App;
