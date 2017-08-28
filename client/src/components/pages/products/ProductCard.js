import PropTypes from 'prop-types'
import React from 'react'
import {product} from '../../../lib/propTypes'

const propTypes = {
  product,
  onDelete: PropTypes.func.isRequired
}

const ProductCard = (props) =>
  <div>
    <h2>{props.product.name}</h2>
    <p>{props.product.price}</p>
    <p><img src={props.product.img} alt={props.product.name} /></p>
    <button onClick={props.onDelete}>Delete</button>
  </div>

ProductCard.propTypes = propTypes

export default ProductCard
