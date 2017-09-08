import React, {Component} from 'react'
import Layout from './components/structure/Layout'
import * as ServerApi from './lib/serverApi'

class DomainDataProvider extends Component {
  state = {
    isLoaded: false,
    products: [],
    user: null,

  }

  componentDidMount () {
    this.getAllProducts()
  }

  getAllProducts = () =>
    ServerApi.getAllProducts(products =>
      this.setState({
        isLoaded: true,
        products
      }))

  addProduct = (newProduct) =>
    ServerApi.addProduct(newProduct, this.getAllProducts)

  deleteProduct = (productId) =>
    ServerApi.deleteProduct(productId, this.getAllProducts)

  updateProduct = (productId) =>
    ServerApi.updateProduct(productId, this.getAllProducts)

  findProductById = (productId) => {
    for (let i = 0; i < this.state.products.length; i++) {
      const currentProduct = this.state.products[i]
      if (currentProduct._id === productId) {
        return currentProduct
      }
    }
  }
  signUpUser = (user) =>
    ServerApi.signUpUser(user, (savedUser) => this.setState({user: savedUser}))

  loginUser = (email, password) =>
    ServerApi.loginUser(email, password, (loggedIn) => {
      console.log('loginUser called')
    })

  render () {
    const domainData = {
      isLoaded: this.state.isLoaded,
      products: this.state.products,
      addProduct: this.addProduct,
      deleteProduct: this.deleteProduct,
      findProductById: this.findProductById,
      updateProduct: this.updateProduct,
      signUpUser: this.signUpUser,
      loginUser: this.loginUser
    }

    return (
      this.state.isLoaded ?
        <Layout domainData={domainData} />
        : null
    )
  }
}

export default DomainDataProvider
