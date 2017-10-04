import React, {Component} from 'react'
import * as AppPropTypes from '../../../lib/propTypes'
import AddressFields from './AddressFields'
import CheckoutCard from './CheckoutCard'
import PropTypes from 'prop-types'

class Checkout extends Component {
  static propTypes = {
    domainData: AppPropTypes.domainData
  }

onSubmit = () => {
  this.props.domainData.placeOrder()
}

render () {
  const cartKeys = Object.keys(this.props.domainData.cart)
  return (
    <div>
      <form>
        <AddressFields domainData={this.props.domainData} addressType={'billing'} />
        <AddressFields domainData={this.props.domainData} addressType={'shipping'} />
        <div>
              Order Total: ${this.props.domainData.totalCart()}
          <div>
            <h1>Order</h1>
            {
              cartKeys.map((product) => {
                const quantity = this.props.domainData.cart[product]
                return (
                  <CheckoutCard
                    product={this.props.domainData.findProductById(product)}
                    quantity={quantity}
                  />
                )
              })
            }
          </div>
        </div>

        <button type='submit' onClick={this.onSubmit}>Submit Order</button>
      </form>
    </div>
  )
}
}

export default Checkout
