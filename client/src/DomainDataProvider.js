import React, {Component} from 'react'
import Layout from './components/structure/Layout'
import * as ServerApi from './lib/serverApi'

class DomainDataProvider extends Component {
  state = {
    isLoaded: false,
    products: [],
    user: null

  }

  componentDidMount () {
    this.getAllProducts()
    ServerApi.getUser()
      .then(user =>
        this.setState({
          user: user
        }))
  }

  getAllProducts = () =>
    ServerApi.getAllProducts()
      .then(products =>
        this.setState({
          isLoaded: true,
          products
        }))

  addProduct = (newProduct) =>
    ServerApi.addProduct(newProduct)
      .then(this.getAllProducts)

  deleteProduct = (productId) =>
    ServerApi.deleteProduct(productId)
      .then(this.getAllProducts)

  updateProduct = (productId) =>
    ServerApi.updateProduct(productId)
      .then(this.getAllProducts)

  findProductById = (productId) => {
    for (let i = 0; i < this.state.products.length; i++) {
      const currentProduct = this.state.products[i]
      if (currentProduct._id === productId) {
        return currentProduct
      }
    }
  }
  signUpUser = (user) =>
    ServerApi.signUpUser(user)
      .then((savedUser) => {
        this.setState({
          user: savedUser
        })
        return savedUser
      })

  loginUser = (email, password) =>
    ServerApi.loginUser(email, password)
      .then((loggedInUser) => {
        console.log(loggedInUser)
        this.setState({
          user: loggedInUser
        })
        return loggedInUser
      })

  logOut = () =>
    ServerApi.logOut()

  render () {
    const domainData = {
      isLoaded: this.state.isLoaded,
      products: this.state.products,
      user: this.state.user,
      addProduct: this.addProduct,
      deleteProduct: this.deleteProduct,
      findProductById: this.findProductById,
      updateProduct: this.updateProduct,
      signUpUser: this.signUpUser,
      loginUser: this.loginUser,
      logOut: this.logOut
    }

    return (
      this.state.isLoaded ?
        <Layout domainData={domainData} />
        : null
    )
  }
}

export default DomainDataProvider
