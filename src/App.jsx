import NavBar from './Components/NavBar/NavBar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'


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
