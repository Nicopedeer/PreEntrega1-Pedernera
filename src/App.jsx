import NavBar from './Components/NavBar/Navbar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Checkout from './Components/Checkout/Checkout'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'
import './App.css'
import Footer from './Components/Footer/Footer'
import CartContextComponent from './context/CartContext'


function App() {

  return (
    <>
    <CartContextComponent>
    <BrowserRouter>
    <NavBar /> 
    <Routes>
      <Route exact path="/" element={<ItemListContainer />}/>
      <Route exact path={`/products/category/:category`} element={<ItemListContainer/>}/>
      <Route exact path={`/products/:id`} element={<ItemDetailContainer/>}/>
      <Route exact path='/Checkout' element={<Checkout />}/>
    </Routes>
    </BrowserRouter>
    <Footer/>
    </CartContextComponent>
    </>
  )
}

export default App
