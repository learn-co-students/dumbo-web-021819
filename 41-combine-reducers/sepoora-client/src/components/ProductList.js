import React from 'react'
import ProductCard from './ProductCard'


const style = {
  padding: 0,
  display: 'grid',
  gridTemplateColumns: 'auto auto auto'
}

const ProductList = props => (
  <ul style={style}>
    {
      props.products.map(product => <ProductCard key={product.id} style={{margin: '5px'}} product={product} /> )
    }
  </ul>
)

export default ProductList