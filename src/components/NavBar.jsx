import './NavBar.css'
import { NavLink } from "react-router-dom"
function NavBar() {
  return (
    <nav className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/products">Products</NavLink>
      <NavLink to="/add">Add Product</NavLink>
    </nav>
  );
}

export default NavBar;