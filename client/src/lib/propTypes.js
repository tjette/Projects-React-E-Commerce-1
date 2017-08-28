import PropTypes from 'prop-types'

export const domainData = PropTypes.shape({
  isLoaded: PropTypes.bool.isRequired,
  products: PropTypes.array.isRequired
}).isRequired
