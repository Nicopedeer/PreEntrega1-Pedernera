import { useState } from 'react'
import NavBar from './Components/NavBar/NavBar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import Styles from 'App.css'

function App() {

  return (
    <>
    <div>
     <NavBar /> 
    </div>
    <div>
      <ItemListContainer greeting="Bienvenidos"/>
    </div>
    </>
  )
}

export default App
