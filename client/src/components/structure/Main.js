import React from 'react'
import {Route} from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Shop from '../pages/Shop'

const styles = {
  main: {
    position: 'fixed',
    top: 50,
    left: 0,
    right: 0,
    bottom: 25,
    overflow: 'scroll'
  }
}
const Main = () => {
  return (
    <main styles={styles.main}>
      <Route path='/' exact component={Home} />
      <Route path='/about' component={About} />
      <Route path='/shop' component={Shop} />
    </main>
  )
}

export default Main
