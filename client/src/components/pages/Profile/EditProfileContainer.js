import React, {Component} from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import * as AppPropTypes from '../../../lib/propTypes'
import EditProfileForm from './EditProfileForm'
import Profile from './Profile'

const styles = {
  header: {
    textAlign: 'center'
  }
}
const enhancer = injectSheet(styles)

class EditProfileContainer extends Component {
  static propTypes = {
    domainData: AppPropTypes.domainData,
    match: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    _id: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired
  }
  constructor (props) {
    console.log(props.domainData)
      super()
      if (props.domainData.user) {
        this.state = {
          id: props.domainData.user._id,
          firstName: props.domainData.user.local.firstName,
          lastName: props.domainData.user.local.lastName,
          email: props.domainData.user.local.email
        }
      } else {
        props.history.push('/')
      }
    }

  onFirstNameChanged = (event) => this.setState({firstName: event.target.value})
  onLastNameChanged = (event) => this.setState({lastName: event.target.value})
  onEmailChanged = (event) => this.setState({email: event.target.value})
  onPasswordChanged = (event) => this.setState({password: event.target.value})
  onEdit = () => this.props.history.push(`profile/edit/${this.state._id}`)
  onSubmit = (event) => {
    event.preventDefault()
    this.props.domainData.updateUser(this.state)
    this.props.history.push('/profile')
    console.log('form submitted')
  }
  render () {
    // <Profile domainData={this.props.domainData} />
    return (
      <div>


            <EditProfileForm
              firstName={this.state.firstName}
              lastName={this.state.lastName}
              email={this.state.email}
              password={this.state.password}
              onFirstNameChanged={this.onFirstNameChanged}
              onLastNameChanged={this.onLastNameChanged}
              onEmailChanged={this.onEmailChanged}
              onPasswordChanged={this.onPasswordChanged}
              onSubmit={this.onSubmit}
              onEdit={this.onEdit}
            />
            : <h1>No user</h1>

        }
      </div>
    )
  }
}
export default enhancer(EditProfileContainer)
