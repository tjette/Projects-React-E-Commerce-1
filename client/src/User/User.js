import React, {Component} from 'react'
import {State} from './'
import Layout from '../Layout'

class User extends Component{
  state = {
    cart: [],
    user: {_id: "59a36d20d01d6748abd7135f"},
    loaded: false
  }
   componentDidMount = () => {
    State.stateful(this,'user')
    State.data.getUser()
   }
   render(){
     return(
       <div>
        <div>
          {this.state.loaded ? <Layout user={this.state.user}/> : null}
        </div>
       </div>
     )
   }
}

export default User
