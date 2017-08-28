import React from 'react'

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.5,
    backgroundColor: 'black',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: 'white'
  }
}

const LoadingOverlay = () =>
  <div style={styles.overlay}>
    <h1 style={styles.text}>Loading...</h1>
  </div>

export default LoadingOverlay
