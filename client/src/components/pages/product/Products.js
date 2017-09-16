import React from 'react'
import * as AppPropTypes from '../../../lib/propTypes'
import {Route} from 'react-router-dom'
import ProductList from './ProductList'
import AddProductContainer from './AddProductContainer'
import EditProductContainer from './EditProductContainer'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'

const propTypes = {
  domainData: AppPropTypes.domainData,
  classes: PropTypes.object.isRequired
}

const styles = {
}
const enhancer = injectSheet(styles)

const Products = (props) => {
  return (
    <div>
      <Route path='/products' exact render={(routeProps) => <ProductList domainData={props.domainData} history={routeProps.history} />} />
      <Route
        path='/products/add'
        render={(routeProps) => <AddProductContainer className={props.classes.shopContainer} domainData={props.domainData} history={routeProps.history} />} />
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

export default enhancer(Products)
