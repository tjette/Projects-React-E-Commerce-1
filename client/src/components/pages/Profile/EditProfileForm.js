import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'

const propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onFirstNameChanged: PropTypes.func.isRequired,
  onLastNameChanged: PropTypes.func.isRequired,
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

const EditProfileForm = (props) => {
  return (
    <div>
      <h1 className={props.classes.header}>Edit Profile</h1>
      <form className={props.classes.form} onSubmit={props.onSubmit}>
        <div>
          <label>First Name</label>
          <input type='text' value={props.firstName} onChange={props.onFirstNameChanged} />
        </div>
        <div>
          <label>Last Name</label>
          <input type='text' value={props.lastName} onChange={props.onLastNameChanged} />
        </div>
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

EditProfileForm.propTypes = propTypes

export default enhancer(EditProfileForm)
