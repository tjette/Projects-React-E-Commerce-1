import React from 'react'
import {Link} from 'react-router-dom'
import * as AppPropTypes from '../../../lib/propTypes'
import ProductCard from './ProductCard'
import PropTypes from 'prop-types'
const styles = {
  display: 'flex',
  justityContent: 'center',
  overflow: 'scroll',
  flexDirection: 'column',
  alignItems: 'center'
}
const propTypes = {
  domainData: AppPropTypes.domainData,
  history: PropTypes.object.isRequired
}

const ProductList = (props) => {
  return (
    <div style={styles}>
      <h1>Product List</h1>
      <Link to='/products/add'>Add Product</Link>

      {
        props.domainData.products.map(product =>
          <ProductCard
            key={product._id}
            product={product}
            onDelete={() => props.domainData.deleteProduct(product._id)}
            onEdit={() => props.history.push(`/products/edit/${product._id}`)} />
        )
      }
    </div>
  )
}

ProductList.propTypes = propTypes

export default ProductList
