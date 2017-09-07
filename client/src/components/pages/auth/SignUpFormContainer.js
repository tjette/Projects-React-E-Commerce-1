import React, {Component} from 'react'
import SignUpForm from './SignUpForm'

const styles = {
  backgroundColor: 'blue'
}
class SignUpFormContainer extends Component {

  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  }

  onFirstNameChanged = (event) => this.setState({firstName: event.target.value})
  onLastNameChanged = (event) => this.setState({lastName: event.target.value})
  onEmailChanged = (event) => this.setState({email: event.target.value})
  onPasswordChanged = (event) => this.setState({password: event.target.value})

  onSubmit = (event) => {
    event.preventDefault()
    console.log('Submitted Form')
  }
  render () {
    return (
      <div>
        <SignUpForm
          style={styles}
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          email={this.state.email}
          password={this.state.password}
          onFirstNameChanged={this.onFirstNameChanged}
          onLastNameChanged={this.onLastNameChanged}
          onEmailChanged={this.onEmailChanged}
          onPasswordChanged={this.onPasswordChanged}
          onSubmit={this.onSubmit}
        />
      </div>
    )
  }
}

export default SignUpFormContainer
