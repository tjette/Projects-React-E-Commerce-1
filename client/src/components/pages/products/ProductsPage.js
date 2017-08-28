import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {domainData} from '../../../lib/propTypes'
import ProductsList from './ProductsList'
import NewProduct from './NewProductContainer'

const propTypes = {
  domainData
}

const Products = (props) => <div>
  <h1>Products</h1>

  <Switch>
    <Route path='/products' exact render={() => <ProductsList domainData={props.domainData} />} />
    <Route path='/products/add' render={(innerProps) => <NewProduct domainData={props.domainData} history={innerProps.history} />} />
  </Switch>
</div>

Products.propTypes = propTypes

export default Products
