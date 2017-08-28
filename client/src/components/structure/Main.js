import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Products from '../pages/Products'

const Main = () =>
  <main>
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/about' component={About} />
      <Route path='/products' component={Products} />
    </Switch>
  </main>

export default Main
