import { useEffect, useState } from "react"
import ProductList from "../components/ProductList"

function Products() {

const [products,setProducts] = useState([])

const [search,setSearch] = useState("")


// Fetch data from server

useEffect(()=>{

fetch("http://localhost:3001/clothes")

.then(res => res.json())

.then(data => setProducts(data))

},[])


// Edit Price

function updatePrice(id){

const newPrice = prompt("Enter new price")

fetch(`http://localhost:3001/clothes/${id}`,{

method:"PATCH",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({

price:newPrice

})

})

.then(res => res.json())

.then(updatedProduct =>

setProducts(products.map(p =>

p.id === id ? updatedProduct : p

))

)

}


// Search Filter

const filteredProducts = products.filter(product =>

product.name.toLowerCase().includes(

search.toLowerCase()

)

)


return(

<div>

<h1>Products</h1>
<ProductList
products={filteredProducts}
updatePrice={updatePrice}
/>

<input

type="text"

placeholder="Search product"

value={search}

onChange={(e)=>setSearch(e.target.value)}

/>


{filteredProducts.map(product =>(

<div key={product.id}>

<h3>{product.name}</h3>

<p>Price: ${product.price}</p>

<p>Stock: {product.stock}</p>

<button onClick={()=>updatePrice(product.id)}>

Edit Price

</button>

</div>

))}


</div>

)

}


export default Products