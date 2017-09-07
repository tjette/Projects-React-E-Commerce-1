import React from 'react'
import PropTypes from 'prop-types'
import * as AppPropTypes from '../../../lib/propTypes'

const propTypes = {
  product: AppPropTypes.product,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired
}
const styles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  borderWidth: 1,
  borderColor: 'black',
  borderStyle: 'solid'
}
const ProductCard = (props) => {
  return (
    <div style={styles}>
      <h1>{props.product.name}</h1>
      <h3>{props.product.price}</h3>
      <button onClick={props.onDelete}>Delete Product</button>
      <button onClick={props.onEdit}>Edit</button>
    </div>
  )
}

ProductCard.propTypes = propTypes

export default ProductCard
