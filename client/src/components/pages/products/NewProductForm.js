import PropTypes from 'prop-types'
import React from 'react'

const propTypes = {
  onNameChanged: PropTypes.func.isRequired,
  onCategoryChanged: PropTypes.func.isRequired,
  onImageChanged: PropTypes.func.isRequired,
  onPriceChanged: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired
}

const NewProductForm = (props) =>
  <form onSubmit={props.onSubmit}>
    <div>
      Product Name: <input type='text' onChange={props.onNameChanged} />
    </div>

    <div>
      Product Category: <input type='text' onChange={props.onCategoryChanged} />
    </div>

    <div>
      Product Image URL: <input type='text' onChange={props.onImageChanged} />
    </div>

    <div>
      Price: <input type='number' onChange={props.onPriceChanged} />
    </div>

    <input type='submit' value='Add New Product' />
    <button onClick={props.onCancel} >Cancel</button>
  </form>

NewProductForm.propTypes = propTypes

export default NewProductForm
