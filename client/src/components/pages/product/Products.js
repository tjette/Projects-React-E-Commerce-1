import React, {Component} from 'react'
import * as AppPropTypes from '../../../lib/propTypes'
import {Route} from 'react-router-dom'
import ProductList from './ProductList'
import AddProductContainer from './AddProductContainer'
import EditProductContainer from './EditProductContainer'

const propTypes = {
  domainData: AppPropTypes.domainData
}
const Products = (props) => {
  return (
    <div style={styles.shopContainer}>
      <Route path='/products' exact render={(routeProps) => <ProductList domainData={props.domainData} history={routeProps.history} />} />
      <Route
        path='/products/add'
        render={(routeProps) => <AddProductContainer style={styles.shopContainer} domainData={props.domainData} history={routeProps.history} />} />
      <Route
        path='/products/edit/:productId'
        render={(routeProps) =>
          <EditProductContainer
            domainData={props.domainData}
            history={routeProps.history}
            match={routeProps.match}
          />}
      />
    </div>
  )
}
Products.propTypes = propTypes

const styles = {
  shopContainer: {
    background: 'url(https://thumbs.dreamstime.com/z/thin-line-web-e-commerce-shopping-mint-seamless-pattern-vector-retail-store-market-design-background-trendy-61035544.jpg) no-repeat center center fixed',
    backgroundSize: 'cover',
    display: 'flex',
    justifyContent: 'center',
    paddingTop: 5,
    height: 1000,
    fontFamily: 'Gloria Hallelujah'
  },
  shoppingHeader: {

  }
}

export default Products
