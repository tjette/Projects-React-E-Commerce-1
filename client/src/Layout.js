import React from 'react'
import {Switch, Route} from 'react-router-dom'
import {Products} from './Products'

const Layout = (props) => {
  return(
    <div>
      <Products />
    </div>
  )
}

export default Layout
