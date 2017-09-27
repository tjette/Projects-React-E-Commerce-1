import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import * as AppPropTypes from '../../../lib/propTypes'

const propTypes = {
  product: AppPropTypes.domainData,
  classes: PropTypes.object.isRequired
}
const styles = {
  orderContainer: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'white',
    flexDirection: 'column',
    alignItems: 'center'

  }
}
const enhancer = injectSheet(styles)
const CheckoutCard = (props) => {
  return (
    <div className={props.classes.orderContainer}>
      <h1>Product: {props.product.name}</h1>
      <h3>Price: {props.product.price}</h3>
      <img src={props.product.image} />
    </div>
  )
}

CheckoutCard.propTypes = propTypes

export default enhancer(CheckoutCard)
