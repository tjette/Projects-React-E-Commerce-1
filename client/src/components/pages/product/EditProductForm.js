import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'

const propTypes = {
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  onNameChanged: PropTypes.func.isRequired,
  onCategoryChanged: PropTypes.func.isRequired,
  onImageChanged: PropTypes.func.isRequired,
  onPriceChanged: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired
}

const styles = {
  header: {
    textAlign: 'center'
  },
  form: {
    display: 'flex',
    justityContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: 'white',
    opacity: 0.7

  }
}
const enhancer = injectSheet(styles)

const EditProductForm = (props) =>
  <div>
    <h1>Editing Product</h1>
    <form className={props.classes.form} onSubmit={props.onSubmit}>
      Name: <input type='text' value={props.name} onChange={props.onNameChanged} />
      Category: <input type='text' value={props.category} onChange={props.onCategoryChanged} />
      Image: <input type='text' value={props.image} onChange={props.onImageChanged} />
      Price: <input type='number' value={props.price} onChange={props.onPriceChanged} />
      <input type='submit' value='Submit' />
    </form>
  </div>

EditProductForm.propTypes = propTypes

export default enhancer(EditProductForm)
