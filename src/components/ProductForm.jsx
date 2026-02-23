import { useState } from "react"

function ProductForm({ addProduct }) {

    const [name,setName] = useState("")
    const [price,setPrice] = useState("")
    const [stock,setStock] = useState("")
    const [category,setCategory] = useState("")

const navigate = useNavigate()
const handleSubmit = (e) => {

e.preventDefault()

const newProduct = {

    name,
    price:Number(price),
    stock:Number(stock),
    category
}

fetch("http://localhost:3001/clothes",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify(newProduct)

})

    .then(r=>r.json())

    .then(data=>{

    addProduct(data)

    navigate("/products")

})

.catch(console.log)

}

return(

<div>

    <h2>Add Product</h2>

<form onSubmit={handleSubmit}>

<input

    type="text"

    placeholder="Product Name"

    value={name}

    onChange={(e)=>setName(e.target.value)}

    required

/>

<input

    type="number"

    placeholder="Price"

    value={price}

    onChange={(e)=>setPrice(e.target.value)}

    required
/>

<input

    type="number"

    placeholder="Stock"

    value={stock}

    onChange={(e)=>setStock(e.target.value)}

    required
/>
<input

    type="text"

    placeholder="Category"

    value={category}

    onChange={(e)=>setCategory(e.target.value)}

    required

/>

<button type="submit">

    Add Product

</button>

</form>

</div>

)

}

export default ProductForm