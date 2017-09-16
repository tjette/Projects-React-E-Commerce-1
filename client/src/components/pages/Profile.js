import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'

const propTypes = {
  classes: PropTypes.object.isRequired
}

const styles = {
  header: {
    textAlign: 'center'
  }
}
const enhancer = injectSheet(styles)

const Profile = (props) => {
  return (
    <div>
      <h1 className={props.classes.header}>Profile Page</h1>
    </div>
  )
}

Profile.propTypes = propTypes

export default enhancer(Profile)
