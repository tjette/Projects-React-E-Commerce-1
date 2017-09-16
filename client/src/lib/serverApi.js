const ajaxRequest = (uri, method, body) => {
  const headers = new Headers({
    'Content-Type': 'application/json'
  })
  const options = {
    headers: headers,
    method: method,
    body: JSON.stringify(body)
  }
  return fetch(`/api/${uri}`, options)
    .then(response => response.json())
    .then(json => json.data)
    .then(data => data)
}

const getAllProducts = () => ajaxRequest('products', 'GET')

const getUser = () => ajaxRequest('get_user', 'GET')

const addProduct = (newProduct) => ajaxRequest('products', 'POST', newProduct)

const deleteProduct = (productId) => ajaxRequest(`products/${productId}`, 'DELETE')

const updateProduct = (product) => ajaxRequest(`products/${product._id}`, 'PUT', product)

const signUpUser = (user) => ajaxRequest('signup', 'POST', user)

const loginUser = (email, password) => ajaxRequest('login', 'POST', {email, password})

const logOut = () => ajaxRequest('logout', 'GET')

export {getAllProducts, addProduct, deleteProduct, updateProduct, signUpUser, loginUser, getUser, logOut}
