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
    flexDirection: 'column',
    backgroundColor: 'white',
    opacity: 0.7
  },
  formFields: {
    paddingRight: 30
  }

}
const enhancer = injectSheet(styles)

const SignUpForm = (props) => {
  return (
    <div>
      <h1 className={props.classes.header}>Sign Up Form</h1>
      <form className={props.classes.form} onSubmit={props.onSubmit}>
        <div className={props.classes.formFields}>
          <label className='firstName'>First Name</label>
          <input type='text' value={props.firstName} onChange={props.onFirstNameChanged} />
        </div>
        <div className={props.classes.formFields}>
          <label className='lastName'>Last Name</label>
          <input type='text' value={props.lastName} onChange={props.onLastNameChanged} />
        </div>
        <div className={props.classes.formFields}>
          <label className='email'>Email</label>
          <input type='text' value={props.email} onChange={props.onEmailChanged} />
        </div>
        <div className={props.classes.formFields}>
          <label className='password'>Password</label>
          <input type='text' value={props.password} onChange={props.onPasswordChanged} />
        </div>
        <div className={props.classes.formFields}>
          <input type='submit' value='Submit' />
        </div>
      </form>
    </div>
  )
}
SignUpForm.propTypes = propTypes

export default enhancer(SignUpForm)
