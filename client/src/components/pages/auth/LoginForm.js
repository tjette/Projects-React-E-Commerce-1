import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onEmailChanged: PropTypes.func.isRequired,
  onPasswordChanged: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}
const LoginForm = (props) => {
  return (
    <div>
      <form onSubmit={props.onSubmit}>
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
export default LoginForm
