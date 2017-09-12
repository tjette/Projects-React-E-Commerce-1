import React from 'react'
import {NavLink} from 'react-router-dom'
import NavItem from './NavItem'

const styles = {
  header: {
    top: 0,
    left: 0,
    right: 0,
    height: 50,
    backgroundColor: 'gray',
    display: 'flex',
    justifyContent: 'space-around',
    fontFamily: 'Gloria Hallelujah',
    color: 'black'
  },
  active: {
    backgroundColor: 'red'
  }
}
const Header = (props) => {
  return (
    <header>
      <nav style={styles.header}>
        <NavItem to='/'>Home</NavItem>
        <NavItem to='/about'>About</NavItem>
        <NavItem to='/products'>Products</NavItem>
        <NavItem to='/signUp'>Sign Up</NavItem>
        <NavItem to='/login'>Log In</NavItem>
      </nav>
    </header>
  )
}

export default Header
