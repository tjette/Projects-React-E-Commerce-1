import React, {Component} from 'react'
import {State as UserState} from '../User'
import {State as ProductState} from './'

class Products extends Component{
  state = {
    products: []
  }
  componentDidMount = () => {
    ProductState.stateful(this,'products')
    ProductState.data.getProducts()
  }
  triggerChange = () => UserState.transform({ name: 'Sally' })
  incrementCount = () => ProductState.data.incrementCount()
  decrementCount = () => ProductState.data.decrementCount()

  render(){
    const user = UserState.get()
    const products = ProductState.get()
    return(
      <div>
        {
          products ? products.map((product, index) =>
            <div key={index}>
              <h1>{ product.name }</h1>
              <h3>{ product.price }</h3>
              <p>{ product.category }</p>
              <button onClick={() => UserState.data.addToCart(product)}>Add to Cart</button>
            </div>
          ) : null
        }

      </div>
    )
  }
}

export default Products
