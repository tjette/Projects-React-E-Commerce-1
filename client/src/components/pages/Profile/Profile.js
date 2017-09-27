import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import EditProfileForm from './EditProfileForm'
import * as AppPropTypes from '../../../lib/propTypes'

const propTypes = {
  domainData: AppPropTypes.domainData,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  toggleEditing: PropTypes.func.isRequired,
  editing: PropTypes.bool.isRequired,
  onFirstNameChanged: PropTypes.func.isRequired,
  onLastNameChanged: PropTypes.func.isRequired,
  onEmailChanged: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired

}

const styles = {
  header: {
    textAlign: 'center',
    backgroundColor: 'white',
    opacity: 0.7
  },
  img: {
    width: 150,
    height: 150
  },
  userData: {
    backgroundColor: 'white',
    opacity: 0.7,
    display: 'flex',
    alignItems: 'center'
  },
  userDataContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  notLoggedIn: {
    textAlign: 'center',
    backgroundColor: 'white',
    opacity: 0.7
  },
  notLoggedInImage: {
    margin: 'auto',
    display: 'block'
  }
}
const enhancer = injectSheet(styles)

const Profile = (props) => {
  return (
    <div>
      <div>
        <h1 className={props.classes.header}>Profile</h1>
        <h1 className={props.classes.header}>{props.firstName}</h1>
      </div>
      <div className={props.classes.userDataContainer}>
        <img className={props.classes.img} src='http://www.freelanceme.net/Images/default%20profile%20picture.png' />
        <form onSubmit={props.onSubmit}>
          <div className={props.classes.userData}>
            { props.editing ? <label>First Name</label> : null }
            { props.editing ? <input type='text' value={props.firstName} onChange={props.onFirstNameChanged} /> : <p>First Name - {props.firstName}</p> }
          </div>
          <div className={props.classes.userData}>
            { props.editing ? <label>Last Name</label> : null }
            { props.editing ? <input type='text' value={props.lastName} onChange={props.onLastNameChanged} /> : <p>Last Name - {props.lastName}</p> }
          </div>
          <div className={props.classes.userData}>
            { props.editing ? <label>Email</label> : null }
            { props.editing ? <input type='text' value={props.email} onChange={props.onEmailChanged} /> : <p>Email - {props.email}</p> }
          </div>
          <div>
            { props.editing ? <button type='submit'>Save Profile</button> : <button type='button' onClick={props.toggleEditing}>Edit Profile</button> }
          </div>
        </form>
      </div>
    </div>
  )
}
Profile.propTypes = propTypes

export default enhancer(Profile)
