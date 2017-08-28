import React, { Component } from 'react'
import Layout from './Layout'
import {User} from './User'
import { BrowserRouter as Router } from 'react-router-dom'

class App extends Component {
  render () {
    return (
      <Router>
        <User>
          <Layout />
        </User>
      </Router>

    )
  }
}

export default App
