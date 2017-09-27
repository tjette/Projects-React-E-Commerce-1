import React from 'react'
import {Link} from 'react-router-dom'
import * as AppPropTypes from '../../../lib/propTypes'
import ProductCard from './ProductCard'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'

const styles = {
  productContainer: {
    background: 'url(http://destinationmissoula.org/assets/img/headers/golfing.jpg) no-repeat center center fixed',
    backgroundSize: 'cover',
    display: 'flex',
    justifyContent: 'center',
    paddingTop: 5,
    fontFamily: 'Gloria Hallelujah',
    flexWrap: 'wrap',
    borderWidth: 3,
    borderColor: 'black',
    borderStyle: 'solid'
  },
  header: {
    backgroundColor: 'white',
    opacity: 0.7,
    textAlign: 'center'
  },
  link: {
    textDecoration: 'none',
    color: 'white',
    backgroundColor: 'black',
    margin: 'auto',
    display: 'block',
    textAlign: 'center'

  }
}
const propTypes = {
  domainData: AppPropTypes.domainData,
  history: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
}

const enhancer = injectSheet(styles)

const ProductList = (props) => {
  return (
    <div>
      <h1 className={props.classes.header}>Product List</h1>
      <Link className={props.classes.link} to='/products/add'>Add Product</Link>
      <div className={props.classes.productContainer}>

        {
          props.domainData.products.length > 0
            ? props.domainData.products.map(product =>
              <ProductCard
                key={product._id}
                product={product}
                onDelete={() => props.domainData.deleteProduct(product._id)}
                onEdit={() => props.history.push(`/products/edit/${product._id}`)}
                onAddToCart={() => props.domainData.addToCart(product._id)} />
            )
            : <h1>No products have been added</h1>
        }
      </div>
    </div>
  )
}

ProductList.propTypes = propTypes

export default enhancer(ProductList)
