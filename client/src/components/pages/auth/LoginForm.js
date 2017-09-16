import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'

const propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onEmailChanged: PropTypes.func.isRequired,
  onPasswordChanged: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired
}

const styles = {
  header: {
    textAlign: 'center',
    backgroundColor: 'white',
    opacity: 0.7
  },
  form: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'white',
    opacity: 0.7,
    flexDirection: 'column',
    alignItems: 'center'
  }
}
const enhancer = injectSheet(styles)

const LoginForm = (props) => {
  return (
    <div>
      <h1 className={props.classes.header}>Login Form</h1>
      <form className={props.classes.form} onSubmit={props.onSubmit}>

        <div>
          <label>Email</label>
          <input type='text' value={props.email} onChange={props.onEmailChanged} />
        </div>
        <div>
          <label>Password</label>
          <input type='text' value={props.password} onChange={props.onPasswordChanged} />
        </div>
        <input type='submit' value='Submit' />
      </form>
    </div>
  )
}

LoginForm.propTypes = propTypes

export default enhancer(LoginForm)
