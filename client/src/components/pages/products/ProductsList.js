import React from 'react'
import {Link} from 'react-router-dom'
import {domainData} from '../../../lib/propTypes'
import ProductCard from './ProductCard'

const propTypes = {
  domainData
}

const ProductsList = (props) =>
  <div>
    <Link to='/products/add'>Add Product</Link>
    {
      props.domainData.products.map((p) =>
        <ProductCard
          product={p}
          onDelete={() => props.domainData.deleteProduct(p._id)}
          key={p._id} />)
    }
  </div>

ProductsList.propTypes = propTypes

export default ProductsList
