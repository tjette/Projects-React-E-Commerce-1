import React from 'react'
import DomainDataProvider from './DomainDataProvider'
import {BrowserRouter} from 'react-router-dom'
import './styles.css'

const App = () =>
  <BrowserRouter>
    <DomainDataProvider />
  </BrowserRouter>

export default App
