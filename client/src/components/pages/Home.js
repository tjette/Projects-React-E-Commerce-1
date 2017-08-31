import React from 'react'
import {Link} from 'react-router-dom'

const styles = {
  header: {
    backgroundColor: '#00cccc',
    paddingTop: 100,
    paddingBottom: 300,
    top: 5,
    display: 'flex',
    justifyContent: 'center'

  },
  button: {
    margin: 'auto',
    display: 'block'
  }
}
const Home = () => {
  return (
    <div>
      <h1 style={styles.header}>E-COMMERCE STORE</h1>
      <i className="fa fa-money" aria-hidden="true"></i>

      <Link to='/shop'><button style={styles.button}>Go Shopping</button></Link>
    </div>
  )
}

export default Home
