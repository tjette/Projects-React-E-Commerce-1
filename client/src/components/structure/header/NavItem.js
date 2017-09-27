import React from 'react'
import PropTypes from 'prop-types'
import {NavLink} from 'react-router-dom'
import injectSheet from 'react-jss'

const styles = {
  navLink: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textDecoration: 'none',
    color: 'black'
  }
}

const enhancer = injectSheet(styles)

const NavItem = (props) => {
  return (
    <div>
      <NavLink className={props.classes.navLink} to={props.to}>{props.children}</NavLink>
    </div>
  )
}
NavItem.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
}
export default enhancer(NavItem)
