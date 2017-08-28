import React, {Component} from 'react'
import Layout from './components/structure/Layout'
import {getAllProducts} from './lib/serverApi'

class DomainDataProvider extends Component {
  state = {
    isLoaded: false,
    products: []
  }

  componentDidMount () {
    getAllProducts(products =>
      this.setState({
        isLoaded: true,
        products
      }))
  }

  render () {
    const domainData = {
      isLoaded: this.state.isLoaded,
      products: this.state.products
    }

    return (
      <Layout domainData={domainData} />
    )
  }
}

export default DomainDataProvider
