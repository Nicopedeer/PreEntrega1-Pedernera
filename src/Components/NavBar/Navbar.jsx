import 'bootstrap/dist/css/bootstrap.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { db } from '../../Firebase/Client';
import { collection, getDocs} from 'firebase/firestore';

const NavBar = () => {
  const [array ,setArray] = useState([])
  const [arrayCategories, setCategories] = useState([])
  

  useEffect(() => {
    const producstRef =collection(db, "products") 
    getDocs(producstRef)
    .then((snapshot) => {
        if(snapshot!= null){
            setArray(snapshot.docs.map(doc => ({id : doc.id, ...doc.data()})))
            setCategories([... new Set(array.map(doc => doc.category))])
    }
    
    })
    .catch(error => console.error(error.message))
},[arrayCategories])




    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link to='/' className="navbar-brand">The Padel Store</Link>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {arrayCategories.map((category, index) =><li key={index} className="nav-item"><NavLink className="nav-link" to={`/products/category/${category}`}>{category}</NavLink></li>)}
      </ul>
      <span className="navbar-text">
        <CartWidget />
      </span>
    </div>
  </div>
</nav>
    )
}

export default NavBar;