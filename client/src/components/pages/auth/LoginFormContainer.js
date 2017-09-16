import React, {Component} from 'react'
import LoginForm from './LoginForm'
import PropTypes from 'prop-types'
import {withRouter} from 'react-router-dom'
import * as AppPropTypes from '../../../lib/propTypes'

class LoginFormContainer extends Component {
  static propTypes = {
    domainData: AppPropTypes.domainData,
    history: PropTypes.object.isRequired
  }

  state = {
    email: '',
    password: ''
  }

  onEmailChanged = (event) => this.setState({email: event.target.value})
  onPasswordChanged = (event) => this.setState({password: event.target.value})

  onSubmit = (event) => {
    event.preventDefault()
    // this.props.domainData.loginUser(this.state.email, this.state.password)
    this.props.domainData.loginUser(this.state.email, this.state.password)
      .then((user) => {
        this.props.history.push('/')
        alert(`You are logged in ${user.local.firstName}`)
      })
  }
  render () {
    return (
      <LoginForm
        email={this.state.email}
        password={this.state.password}
        onEmailChanged={this.onEmailChanged}
        onPasswordChanged={this.onPasswordChanged}
        onSubmit={this.onSubmit}
        domainData={this.domainData}
      />
    )
  }
}

export default withRouter(LoginFormContainer)
