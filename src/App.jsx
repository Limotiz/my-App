import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import AddProduct from "./pages/AddProduct"
import Products from "./pages/Products"
import NavBar from "./components/NavBar"


const App = () => {

return (

<BrowserRouter>

<NavBar />

<Routes>

<Route path="/" element={<Home />} />

<Route path="/products" element={<Products />} />


<Route path="/add" element={<AddProduct />} />

</Routes>

</BrowserRouter>

)

}

export default App