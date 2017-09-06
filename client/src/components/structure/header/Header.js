import React from 'react'
import {NavLink} from 'react-router-dom'
import NavItem from './NavItem'

const styles = {
  header: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    height: 50,
    backgroundColor: 'gray',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingLeft: 20,
    paddingRight: 20,
    fontFamily: 'Gloria Hallelujah'
  },
  active: {
    backgroundColor: 'red'
  },
  link: {
    padding: 5,
    textDecoration: 'none',
    color: 'white'
  }
}
const Header = (props) => {
  return (
    <header style={styles.header}>
      <nav>
        <NavItem style={styles.link} to='/'>Home</NavItem>
        <NavItem style={styles.link} to='/about'>About</NavItem>
        <NavItem style={styles.link} to='/products'>Products</NavItem>
      </nav>
    </header>
  )
}

export default Header
