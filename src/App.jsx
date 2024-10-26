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

const [selectedProducts, setSelectedProducts] = useState([]);

const handleSelectedProduct = (product) => {
  const isExist = selectedProducts.find((p) => p.id == product.id);

  if(isExist) {
    alert("Already Exist.")
  }
  else{
    const newProducts = [...selectedProducts, product];
    setSelectedProducts(newProducts);
  }
}

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
      <Navbar selectedProducts={selectedProducts}></Navbar>
      <div className='w-11/12 mx-auto md:flex'>
        <Allproducts handleSelectedProduct={handleSelectedProduct}></Allproducts>
        <CartContainer selectedProducts={selectedProducts} handleIsActiveState={handleIsActiveState}
        isActive={isActive}></CartContainer>
      </div>
    </>
  )
}

export default App
