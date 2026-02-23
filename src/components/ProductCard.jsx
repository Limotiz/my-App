function ProductCard({product,updatePrice}){

return(

<div>

    <h3>{product.name}</h3>

    <p>Price: ${product.price}</p>

    <p>Stock: {product.stock}</p>

<button
onClick={()=>updatePrice(product.id)}
>

 Edit Price

</button>
</div>

)

}

export default ProductCard