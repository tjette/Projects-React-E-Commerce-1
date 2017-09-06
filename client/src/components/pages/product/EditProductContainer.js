import PropTypes from 'prop-types'
import React, {Component} from 'react'
import EditProductForm from './EditProductForm'
import * as AppPropTypes from '../../../lib/propTypes'

class EditProductContainer extends Component {
  static propTypes = {
    domainData: AppPropTypes.domainData,
    history: PropTypes.object.isRequired
  }

  constructor () {
    super()
    this.state = {
      name: '',
      category: '',
      image: '',
      price: ''
    }
  }

  onNameChanged = (event) => this.setState({name: event.target.value})
  onCategoryChanged = (event) => this.setState({category: event.target.value})
  onImageChanged = (event) => this.setState({image: event.target.value})
  onPriceChanged = (event) => this.setState({price: event.target.value})
  onSubmit = (event) => {
    event.preventDefault()
    console.log('Edit product submitted')
  }
  render () {
    return (
      <EditProductForm
        name={this.state.name}
        category={this.state.category}
        image={this.state.image}
        price={this.state.price}
        onNameChanged={this.onNameChanged}
        onCategoryChanged={this.onCategoryChanged}
        onImageChanged={this.onImageChanged}
        onPriceChanged={this.onPriceChanged}
        onSubmit={this.onSubmit}
      />
    )
  }
}

export default EditProductContainer
