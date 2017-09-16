import React from 'react'
import {Link} from 'react-router-dom'

const styles = {
  header: {
    textAlign: 'center'
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
      <i className='fa fa-money' aria-hidden='true' />

      <Link to='/products'><button style={styles.button}>Go Shopping</button></Link>
    </div>
  )
}

export default Home
