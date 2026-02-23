import ProductCard from "./ProductCard"

const ProductList = ({ products, updatePrice }) => {

return (

<div>

{products.map(product => (

<ProductCard

key={product.id}

product={product}

updatePrice={updatePrice}

/>

))}

</div>

)

}

export default ProductList