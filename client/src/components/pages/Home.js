import React from 'react'
import {Link} from 'react-router-dom'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'

const propTypes = {
  classes: PropTypes.object.isRequired
}

const styles = {
  header: {
    textAlign: 'center',
    backgroundColor: 'white',
    opacity: 0.7
  },
  button: {
    margin: 'auto',
    display: 'block'
  }
}
const enhancer = injectSheet(styles)

const Home = (props) => {
  return (
    <div>
      <h1 className={props.classes.header}>GOLF E-COMMERCE STORE</h1>
      <i className='fa fa-money' aria-hidden='true' />

      <Link to='/products'><button className={props.classes.button}>Go Shopping</button></Link>
    </div>
  )
}

Home.propTypes = propTypes

export default enhancer(Home)
