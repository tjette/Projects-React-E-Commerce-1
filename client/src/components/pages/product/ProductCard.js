import React from 'react'
import PropTypes from 'prop-types'
import * as AppPropTypes from '../../../lib/propTypes'
import injectSheet from 'react-jss'

const propTypes = {
  product: AppPropTypes.product,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onAddToCart: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  isAdmin: PropTypes.bool.isRequired,
  loggedIn: PropTypes.bool.isRequired
}
const styles = {
  productCard: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    borderWidth: 3,
    borderColor: 'black',
    borderStyle: 'solid',
    backgroundColor: 'white',
    opacity: 0.7,
    flexWrap: 'wrap',
    width: 350,
    margin: 50
  }
}
const enhancer = injectSheet(styles)

const ProductCard = (props) => {
  return (
    <div className={props.classes.productCard}>
      <h1>{props.product.name}</h1>
      <h3>{props.product.price}</h3>

      { props.isAdmin && props.loggedIn ? <button onClick={props.onDelete}>Delete Product</button> : null }
      { props.isAdmin && props.loggedIn ? <button onClick={props.onEdit}>Edit</button> : null }
      <button onClick={props.onAddToCart}>Add To Cart</button>
    </div>
  )
}

ProductCard.propTypes = propTypes

export default enhancer(ProductCard)
