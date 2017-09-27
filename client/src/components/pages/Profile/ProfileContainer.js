import React, {Component} from 'react'
import Profile from './Profile'
import PropTypes from 'prop-types'
import * as AppPropTypes from '../../../lib/propTypes'
import {withRouter} from 'react-router-dom'

class ProfileContainer extends Component {
  static propTypes = {
    domainData: AppPropTypes.domainData,
    history: PropTypes.object.isRequired
  }
constructor (props) {
    console.log(props.domainData)
    super()
    if (props.domainData.user) {
      this.state = {
        id: props.domainData.user._id,
        firstName: props.domainData.user.local.firstName,
        lastName: props.domainData.user.local.lastName,
        email: props.domainData.user.local.email,
        editing: null
      }
    } else {
      props.history.push('/')
    }
  }
  toggleEditing = () => {
    this.setState({editing: !this.state.editing})
  }
  onFirstNameChanged = (event) => {
    this.setState({firstName: event.target.value})
  }
  onLastNameChanged = (event) => {
    this.setState({lastName: event.target.value})
  }
  onEmailChanged = (event) => {
    this.setState({email: event.target.value})
  }
  onSubmit = (event) => {
    event.preventDefault()
    this.props.domainData.updateUser(this.state)
    this.props.history.push('/profile')
    console.log('form submitted')
  }

  render () {
    return (
      <Profile
        {...this.state}
        toggleEditing={this.toggleEditing}
        onFirstNameChanged={this.onFirstNameChanged}
        onLastNameChanged={this.onLastNameChanged}
        onEmailChanged={this.onEmailChanged}
        onSubmit={this.onSubmit}
      />
    )
  }
}

export default withRouter(ProfileContainer)
