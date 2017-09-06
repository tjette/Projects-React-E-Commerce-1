import React from 'react'
import PropTypes from 'prop-types'
import {NavLink} from 'react-router-dom'

const styles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textDecoration: 'none'
}
const NavItem = (props) => {
  return (
    <div style={styles}>
      <NavLink className='navBar' to={props.to}>{props.children}</NavLink>
    </div>
  )
}
NavItem.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
}
export default NavItem
