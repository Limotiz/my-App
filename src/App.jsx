import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import AddProduct from "./pages/AddProduct"
import Products from "./pages/Products"
import NavBar from "./components/NavBar"
import ProductDetail from "./pages/ProductDetail"

const App = () => {

  return (

  <BrowserRouter>

     <NavBar />

<Routes>
 
  <Route path="/" element={<Home />} />

  <Route path="/products" element={<Products />} />

  <Route path="/products/:id" element={<ProductDetail />} />

  <Route path="/add" element={<AddProduct />} />

  </Routes>

</BrowserRouter>

)

}

export default App