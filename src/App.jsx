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

const [price, setPrice] =useState(500);

const handleIncreasePrice = pr => {
  setPrice(price + pr);
}

const handleDeletePrice = id => {
  const product = selectedProducts.find(p => p.id === id);
  setPrice(price - product.price);
}

const handleDelete = id => {
  handleDeletePrice(id);
  const remainingProduct = selectedProducts.filter(p => p.id != id);
  setSelectedProducts(remainingProduct);
}

const handleSelectedProduct = (product) => {
  const isExist = selectedProducts.find((p) => p.id == product.id);

  if(isExist) {
    alert("Already Exist.")
  }
  else{
    handleIncreasePrice(product.price);
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
      <Navbar price={price} selectedProducts={selectedProducts}></Navbar>
      <div className='w-11/12 mx-auto md:flex'>
        <Allproducts handleSelectedProduct={handleSelectedProduct}></Allproducts>
        <CartContainer handleDelete={handleDelete} selectedProducts={selectedProducts} handleIsActiveState={handleIsActiveState}
        isActive={isActive}></CartContainer>
      </div>
    </>
  )
}

export default App
