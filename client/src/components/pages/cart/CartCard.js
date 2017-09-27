import React from 'react'
import PropTypes from 'prop-types'
import * as AppPropTypes from '../../../lib/propTypes'
import injectSheet from 'react-jss'

const propTypes = {
  classes: PropTypes.object.isRequired,
  product: AppPropTypes.product,
  quantity: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
  onSetQuantity: PropTypes.func.isRequired
}
const styles = {
  header: {
    textAlign: 'center',
    backgroundColor: 'white',
    opacity: 0.7
  },
  cartCard: {
    borderWidth: 3,
    borderColor: 'black',
    borderStyle: 'solid',
    backgroundColor: 'white',
    opacity: 0.7
  }
}
const enhancer = injectSheet(styles)
const confirmMessage = 'Remove Product?'

const CartCard = (props) => {
  console.log(props)

  const onChange = (event) => {
    const quantity = parseInt(event.target.value, 10)
    if (quantity > 0 || window.confirm(confirmMessage)) {
      props.onSetQuantity(quantity)
    }
  }

  return (
    <div>
      <div>
        <h1 className={props.classes.header}>{props.product.name}</h1>
      </div>
      <div className={props.classes.cartCard}>
        <h1>{props.product.name}</h1>
        <button onClick={props.onDelete}>Delete Item in Cart</button>
        <input
          type='number'
          value={props.quantity}
          onChange={onChange}
        />
      </div>
    </div>
  )
}

CartCard.propTypes = propTypes
export default enhancer(CartCard)
