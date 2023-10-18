import 'bootstrap/dist/css/bootstrap.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  const arrayCategories = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing"
  ]

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link to='/' className="navbar-brand">The Padel Store</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {arrayCategories.map((cat, index) =><li key={index} className="nav-item"><NavLink className="nav-link" to={`/products/category/${cat}`}>{cat}</NavLink></li>)}
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