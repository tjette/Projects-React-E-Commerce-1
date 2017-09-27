import React from 'react'
import * as AppPropTypes from '../../../lib/propTypes'
import AddressFields from './AddressFields'
import injectSheet from 'react-jss'

const propTypes = {
  domainData: AppPropTypes.domainData
}

const Checkout = (props) => {
  return (
    <div>
      <form>
        <AddressFields domainData={props.domainData} addressType={'billing'} />
        <AddressFields domainData={props.domainData} addressType={'shipping'} />
        <div>
              Order Total: ${props.domainData.totalCart()}
        </div>

        <button type='submit'>Submit Order</button>
      </form>
    </div>
  )
}
Checkout.propTypes = propTypes
export default Checkout
