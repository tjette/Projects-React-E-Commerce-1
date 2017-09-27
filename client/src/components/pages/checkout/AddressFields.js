import React from 'react'
import PropTypes from 'prop-types'
import * as AppPropTypes from '../../../lib/propTypes'

const propTypes = {
  domainData: AppPropTypes.domainData,
  addressType: PropTypes.string.isRequired
}

const AddressFields = (props) => {
  return (
    <div>
      {
        props.addressType === 'billing' ? <h1>Billing Address</h1> : <h1>Shipping Address</h1>
      }
      <label>Street</label>
      <input type='text' onChange={(event) => props.domainData.updateAddressField(event.target.value, 'street', props.addressType)} />
      <label>City</label>
      <input type='text' onChange={(event) => props.domainData.updateAddressField(event.target.value, 'city', props.addressType)} />
      <label>State</label>
      <input type='text' onChange={(event) => props.domainData.updateAddressField(event.target.value, 'state', props.addressType)} />
      <label>Zipcode</label>
      <input type='text' onChange={(event) => props.domainData.updateAddressField(event.target.value, 'zipcode', props.addressType)} />
    </div>
  )
}
AddressFields.propTypes = propTypes

export default AddressFields
