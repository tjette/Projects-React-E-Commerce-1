import React from 'react'
import {Link} from 'react-router-dom'

const styles = {
  header: {
    background: 'url(https://thumbs.dreamstime.com/z/thin-line-web-e-commerce-shopping-mint-seamless-pattern-vector-retail-store-market-design-background-trendy-61035544.jpg) no-repeat center center fixed',
    paddingTop: 100,
    backgroundSize: 'cover',
    paddingBottom: 300,
    top: 5,
    display: 'flex',
    justifyContent: 'center',
    fontFamily: 'Gloria Hallelujah'

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

      <Link to='/products'><button style={styles.button}>Go Shopping</button></Link>
    </div>
  )
}

export default Home
