import React from 'react'
import {domainData} from '../../lib/propTypes'
import LoadingOverlay from '../presentation/LoadingOverlay'
import Main from './Main'
import Header from './Header'
import Footer from './Footer'

const propTypes = {
  domainData
}

const Layout = (props) =>
  props.domainData.isLoaded
    ? (
      <div id='layout'>
        <Header />
        <Main domainData={props.domainData} />
        <Footer />
      </div>
    ) : (
      <LoadingOverlay />
    )

Layout.propTypes = propTypes

export default Layout
