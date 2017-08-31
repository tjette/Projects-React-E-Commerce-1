import React from 'react'

const styles = {
  footer: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    height: 40,
    backgroundColor: 'gray',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 50
  }
}
const Footer = () => {
  return (
    <footer style={styles.footer}>
      <h3>Thanks For Shopping!</h3>
    </footer>
  )
}

export default Footer
