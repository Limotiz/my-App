import { Link } from "react-router-dom"

function Home() {
  return (
    <main>
      <h1> Welcome to the Luku Baridi </h1>
      <p>
       Here we sell male executive clothes from all over the world at affordable prices
      </p>
      <nav>
        {/* Links to Products and AddProduct */}
        <Link to="/products">View Clothes</Link> |{" "}
        <Link to="/add">Add Product</Link>
      </nav>
    </main>
  )
}

export default Home