import React from 'react'
import {Route} from 'react-router-dom'
import * as AppPropTypes from '../../lib/propTypes'
import Home from '../pages/Home'
import About from '../pages/About'
import Products from '../pages/product/Products'

const styles = {
  main: {
    background: 'url(https://thumbs.dreamstime.com/z/thin-line-web-e-commerce-shopping-mint-seamless-pattern-vector-retail-store-market-design-background-trendy-61035544.jpg) no-repeat center center fixed',
    position: 'fixed',
    top: 100,
    left: 0,
    right: 0,
    height: 2000,
    overflow: 'scroll'
  }
}
const propTypes = {
  domainData: AppPropTypes.domainData
}
const Main = (props) => {
  return (
    <main styles={styles.main}>
      <Route path='/' exact component={Home} />
      <Route path='/about' component={About} />
      <Route path='/products' render={() => <Products domainData={props.domainData} />} />
    </main>
  )
}

Main.propTypes = propTypes

export default Main
