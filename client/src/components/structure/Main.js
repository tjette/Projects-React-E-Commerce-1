import React from 'react'
import { Route, Switch } from 'react-router-dom'
import {domainData} from '../../lib/propTypes'
import Home from '../pages/Home'
import About from '../pages/About'
import ProductsPage from '../pages/products/ProductsPage'

const propTypes = {
  domainData
}

const Main = (props) =>
  <main>
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/about' component={About} />
      <Route path='/products' render={() => <ProductsPage domainData={props.domainData} />} />
    </Switch>
  </main>

Main.propTypes = propTypes

export default Main
