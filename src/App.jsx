import NavBar from './Components/NavBar/NavBar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Checkout from './Components/Checkout/Checkout'


function App() {

  return (
    <>
    <BrowserRouter>
    <NavBar /> 
    <Routes>
      <Route exact path="/" element={<ItemListContainer />}/>
      <Route exact path='/Checkout' element={<Checkout />}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
