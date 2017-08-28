import $ from 'jquery'

const incrementStock = (context, item) => {
  context.data[context.data.indexOf(item)].quantity += 1
  context.bind.setState({ products: context.data })
}

const decrementStock = (context, item) => {
  context.data[context.data.indexOf(item)].quantity -= 1
  context.bind.setState({ products: context.data })
}

const getProducts = (context) => {
  $.ajax({
    url: `/api/products`,
    method: 'GET'
  })
  .done((response) => {
    context.data = response.data
    context.loaded = true
    context.bind.setState({ loaded: context.loaded, user: context.data })
  })
}

export {incrementStock, decrementStock, getProducts}
