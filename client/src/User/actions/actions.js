import $ from 'jquery'

const addToCart = (context,item) => {
  context.data.cart.push(item)
  context.bind.setState({ user: context.data })
}

const removeFromCart = (context,item) => {
  context.data.cart.splice(item)
  context.bind.setState({ user: context.data })
}

const getUser = (context) => {
  $.ajax({
    url: `/api/users/${context.data._id}`,
    method: 'GET'
  })
  .done((response) => {
    context.data = response.data
    context.loaded = true
    context.bind.setState({loaded: context.loaded, user: context.data})
  })
}

export {addToCart, removeFromCart, getUser}
