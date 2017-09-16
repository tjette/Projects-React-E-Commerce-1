import React from 'react'
import {Route} from 'react-router-dom'
import * as AppPropTypes from '../../lib/propTypes'
import Home from '../pages/Home'
import About from '../pages/About'
import Profile from '../pages/Profile'
import Products from '../pages/product/Products'
import SignUpFormContainer from '../pages/auth/SignUpFormContainer'
import LoginFormContainer from '../pages/auth/LoginFormContainer'

const styles = {
  main: {
    background: 'url(http://destinationmissoula.org/assets/img/headers/golfing.jpg) no-repeat center center fixed',
    top: 100,
    left: 0,
    right: 0,
    height: 2000,
    overflow: 'scroll',
    backgroundSize: 'cover',
    fontFamily: 'Gloria Hallelujah'
  }
}
const propTypes = {
  domainData: AppPropTypes.domainData
}
const Main = (props) => {
  return (
    <main style={styles.main}>
      <Route path='/' exact component={Home} />
      <Route path='/about' component={About} />
      <Route path='/products' render={() => <Products domainData={props.domainData} />} />
      <Route path='/signup' render={() => <SignUpFormContainer domainData={props.domainData} />} />
      <Route path='/login' render={() => <LoginFormContainer domainData={props.domainData} />} />
      <Route path='/profile' render={(routeProps) => <Profile domainData={props.domainData} history={routeProps.history} />} />
    </main>
  )
}

Main.propTypes = propTypes

export default Main
