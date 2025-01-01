import React from 'react'
import Product from './Product'
import products from '../products'


const ProductCard = () => {
  return (
    <div className='p-4 flex justify-evenly gap-2 flex-wrap'>
      {products.map((product)=>{
        return <Product key={product.id} data={product}/>
      })}
    </div>
  )
}

export default ProductCard