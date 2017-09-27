import React from 'react'
import {Link} from 'react-router-dom'
import * as AppPropTypes from '../../../lib/propTypes'
import CartCard from './CartCard'

const propTypes = {
  domainData: AppPropTypes.domainData
}

const Cart = (props) => {
  console.log(props.domainData)
  const cartKeys = Object.keys(props.domainData.cart)
  console.log(cartKeys)
  return (
    <div>
      <h1>Cart</h1>
      <div>
        {
          cartKeys.length
            ? <div>{
              cartKeys.map((productId, i) =>
                <CartCard
                  key={i}
                  product={props.domainData.findProductById(productId)}
                  onDelete={() => props.domainData.setQuantityInCart(productId, 0)}
                  onSetQuantity={(quantity) => props.domainData.setQuantityInCart(productId, quantity)}
                  quantity={props.domainData.cart[productId]}
                />)
            }<div>
          : <h3>Total: {props.domainData.totalCart()}</h3>
              <Link to='/checkout'>Checkout</Link>
            </div>
            </div>
            : <h1>Cart Empty</h1>

        }
      </div>
    </div>
  )
}
Cart.propTypes = propTypes

export default Cart
