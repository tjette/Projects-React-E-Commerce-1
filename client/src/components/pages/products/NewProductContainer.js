import PropTypes from 'prop-types'
import React, {Component} from 'react'
import {domainData} from '../../../lib/propTypes'
import NewProductForm from './NewProductForm'

class NewProductContainer extends Component {
  static propTypes = {
    domainData,
    history: PropTypes.object.isRequired
  }

  state = {
    name: '',
    category: '',
    image: '',
    price: 0
  }

  onNameChanged = (event) => this.setState({name: event.target.value})

  onCategoryChanged = (event) => this.setState({category: event.target.value})

  onImageChanged = (event) => this.setState({image: event.target.value})

  onPriceChanged = (event) => this.setState({price: event.target.value})

  onSubmit = (event) => {
    event.preventDefault()
    this.props.domainData.addProduct(this.state)
    this.props.history.push('/products')
  }

  onCancel = (event) => {
    event.preventDefault()
    this.props.history.push('/products')
  }

  render () {
    return (
      <NewProductForm
        onNameChanged={this.onNameChanged}
        onCategoryChanged={this.onCategoryChanged}
        onImageChanged={this.onImageChanged}
        onPriceChanged={this.onPriceChanged}
        onSubmit={this.onSubmit}
        onCancel={this.onCancel}
      />
    )
  }
}

export default NewProductContainer
