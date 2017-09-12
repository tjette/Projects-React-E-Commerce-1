import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onFirstNameChanged: PropTypes.func.isRequired,
  onLastNameChanged: PropTypes.func.isRequired,
  onEmailChanged: PropTypes.func.isRequired,
  onPasswordChanged: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}
const styles = {
  header: {
    textAlign: 'center'
  },
  mainDiv: {
    display: 'flex',
    justifyContent: 'center'
  },
  form: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 3,
    borderStyle: 'solid',
    flexDirection: 'column'
  },
  formFields: {
    paddingRight: 30
  }

}
const SignUpForm = (props) => {
  return (
    <div>
      <h1 style={styles.header}>Sign Up Form</h1>
      <form style={styles.form} onSubmit={props.onSubmit}>
        <div style={styles.formFields}>
          <label className='firstName'>First Name</label>
          <input type='text' value={props.firstName} onChange={props.onFirstNameChanged} />
        </div>
        <div style={styles.formFields}>
          <label className='lastName'>Last Name</label>
          <input type='text' value={props.lastName} onChange={props.onLastNameChanged} />
        </div>
        <div style={styles.formFields}>
          <label className='email'>Email</label>
          <input type='text' value={props.email} onChange={props.onEmailChanged} />
        </div>
        <div style={styles.formFields}>
          <label className='password'>Password</label>
          <input type='text' value={props.password} onChange={props.onPasswordChanged} />
        </div>
        <div style={styles.formFields}>
          <input type='submit' value='Submit' />
        </div>
      </form>
    </div>
  )
}
SignUpForm.propTypes = propTypes

export default SignUpForm
