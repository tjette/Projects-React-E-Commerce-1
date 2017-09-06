import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  onNameChanged: PropTypes.func.isRequired,
  onCategoryChanged: PropTypes.func.isRequired,
  onImageChanged: PropTypes.func.isRequired,
  onPriceChanged: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

const EditProductForm = (props) =>
  <form onSubmit={props.onSubmit}>
    Name: <input type='text' value={props.name} onChange={props.onNameChanged} />
    Category: <input type='text' value={props.category} onChange={props.onCategoryChanged} />
    Image: <input type='text' value={props.image} onChange={props.onImageChanged} />
    Price: <input type='number' value={props.price} onChange={props.onPriceChanged} />
    <input type='submit' value='Submit' />
  </form>

EditProductForm.propTypes = propTypes

export default EditProductForm
