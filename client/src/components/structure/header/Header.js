import React from 'react'
import {NavLink} from 'react-router-dom'
import NavItem from './NavItem'

const styles = {
  header: {
    top: 0,
    left: 0,
    right: 0,
    height: 100,
    backgroundColor: 'gray',
    display: 'flex',
    justifyContent: 'space-around',
    fontFamily: 'Gloria Hallelujah'
  },
  active: {
    backgroundColor: 'red'
  }
}
const Header = (props) => {
  return (
    <header style={styles.header}>
      <nav>
        <NavItem to='/'>Home</NavItem>
        <NavItem to='/about'>About</NavItem>
        <NavItem to='/products'>Products</NavItem>
      </nav>
    </header>
  )
}

export default Header
