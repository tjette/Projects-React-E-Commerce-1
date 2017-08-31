import React from 'react'
import {NavLink} from 'react-router-dom'
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
    paddingRight: 20
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
const Header = () => {
  return (
    <header style={styles.header}>
      <nav>
        <NavLink style={styles.link} to='/'>Home</NavLink>
        <NavLink style={styles.link} to='/about'>About</NavLink>
        <NavLink style={styles.link} to='/shop'>Shop</NavLink>
      </nav>
    </header>
  )
}

export default Header
