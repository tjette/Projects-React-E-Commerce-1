import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
const propTypes = {
  name: PropTypes.string.isRequired,
  onNameChanged: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
  onCategoryChanged: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
  onImageChanged: PropTypes.func.isRequired,
  price: PropTypes.number.isRequired,
  onPriceChanged: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}
const styles = {
  header: {
    textAlign: 'center'
  },
  form: {
    display: 'flex',
    justityContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'

  }
}
const AddProductForm = (props) => {
  return (
    <div>
      <h1 style={styles.header}>Add Product</h1>
      <form className='submitForm'style={styles.form} onSubmit={props.onSubmit}>
        <div className='formFields name'>
          <label className='name'>Name:</label>
          <input type='text' value={props.name} onChange={props.onNameChanged} />
        </div>
        <div className='formFields'>
          <label className='category'>Category:</label>
          <input type='text' value={props.category} onChange={props.onCategoryChanged} />
        </div>
        <div className='formFields'>
          <label className='image'>Image:</label>
          <input type='text' value={props.image} onChange={props.onImageChanged} />
        </div>
        <div className='formFields'>
          <label className='price'>Price:</label>
          <input type='number' value={props.price} onChange={props.onPriceChanged} />
        </div>
        <div>
          <input className='submitFormInput'
            type='submit'
            value='Submit Form'
            disabled={!props.name || !props.category || !props.image || props.price <= 0}
          />
        </div>
        <Link to='/products'>Cancel</Link>
      </form>

    </div>
  )
}

AddProductForm.propTypes = propTypes

export default AddProductForm
