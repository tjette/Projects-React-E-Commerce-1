import React from 'react'
import {NavLink} from 'react-router-dom'
import injectSheet from 'react-jss'
import NavItem from './NavItem'
import PropTypes from 'prop-types'
import * as AppPropTypes from '../../../lib/propTypes'

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
    color: 'black',
    // '&:hover': {
    //   backgroundColor: 'white'
    // },
    '& a:link': {
      color: 'black'
    },
    '& a:visited': {
      color: 'white'
    },
    '& a:hover': {
      color: 'white'
    }
  },
  active: {
    backgroundColor: 'red'
  }
}
const enhancer = injectSheet(styles)

const Header = (props) => {
  return (
    <header>
      <nav className={props.classes.header}>
        <NavItem to='/'>Home</NavItem>
        <NavItem to='/about'>About</NavItem>
        <NavItem to='/products'>Products</NavItem>
        <NavItem to='/signUp'>Sign Up</NavItem>
        <NavItem to='/cart'>Cart</NavItem>
        {
          props.domainData.user
            ? <NavItem to='/profile'>Profile - {props.domainData.user.local.firstName}</NavItem>
            : <NavItem to='/login'>Log In</NavItem>
        }
        {
          props.domainData.user
            ? <NavItem to='/logout'>Log Out</NavItem>
            : null
        }

      </nav>
    </header>
  )
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  domainData: AppPropTypes.domainData
}

export default enhancer(Header)
