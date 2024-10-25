import { useState } from 'react'
import './App.css'
import Allproducts from './comoponents/Allproducts/Allproducts'
import CartContainer from './comoponents/CartContainer/CartContainer'
import Navbar from './comoponents/Header/Navbar'

function App() {
const [isActive, setIsActive] = useState({
  cart: true,
  status: "cart"
});

const handleIsActiveState = (status) => {
  if(status == "cart") {
    setIsActive({
      cart: true,
      status: "cart"
    })
  }
  else{
    setIsActive({
      cart: false,
      status: "about"
    })
  }
}
  return (
    <>
      <Navbar></Navbar>
      <div className='w-11/12 mx-auto flex justify-between'>
        <Allproducts></Allproducts>
        <CartContainer handleIsActiveState={handleIsActiveState}
        isActive={isActive}></CartContainer>
      </div>
    </>
  )
}

export default App
