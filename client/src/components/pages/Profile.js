import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'

const propTypes = {
  domainData: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
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
  }
}
const enhancer = injectSheet(styles)

const Profile = (props) => {
  console.log(props.domainData.user)
  return (
    <div>
      <div>
        <h1 className={props.classes.header}>Profile</h1>
        <h1 className={props.classes.header}>{props.domainData.user.local.firstName}</h1>
      </div>
      <div className={props.classes.userDataContainer}>
        <img className={props.classes.img} src='http://www.freelanceme.net/Images/default%20profile%20picture.png' />
        <div className={props.classes.userData}>
          <p>First Name - {props.domainData.user.local.firstName}</p>
        </div>
        <div className={props.classes.userData}>
          <p>Last Name - {props.domainData.user.local.lastName}</p>
        </div>
        <div className={props.classes.userData}>
          <p>Email - {props.domainData.user.local.email}</p>
        </div>
      </div>
    </div>
  )
}

Profile.propTypes = propTypes

export default enhancer(Profile)
