 import React, {useEffect, useState}  from 'react'
import axios from 'axios'




 const Products = () => {
  const [products, setProducts] = useState([]);
  const [fetchData, setFetchData] = useState([])

  useEffect(() => {
fetchProducts()
  }, [])
 
 const fetchProducts = () => {
   axios
    .get('https://dummyjson.com/products')
    .then((res) =>{

      setFetchData(res.data)
      setProducts(res.data.products)
    })
    
  .catch((err) => {
     console.log(err)
    })

  }

  
  
    return (
    <div>
      
     
     
    <div className='item-container' >
{products && products.map((product) =>(
<div className='card' key={product.id}>
<img src={product.images} alt=''/>
<h3> {product.title}</h3>
<h3>{product.price} $</h3>
<p className='products-details'>{product.description}</p>
<div className='add-to-cart'> ADD TO CART</div>

</div>
))}
 </div>
         

 


       </div>
  )
}

export default Products