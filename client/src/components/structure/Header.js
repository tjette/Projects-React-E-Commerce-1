import React from 'react'
import {NavLink} from 'react-router-dom'

const styles = {
  activeLink: {
    color: 'red'
  }
}

const Header = () =>
  <header>
    <nav>
      <NavLink to='/' exact activeStyle={styles.activeLink}>Home</NavLink>
      <NavLink to='/about' activeStyle={styles.activeLink}>About</NavLink>
      <NavLink to='/products' activeStyle={styles.activeLink}>Products</NavLink>
    </nav>
  </header>

export default Header
