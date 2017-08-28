import {addToCart, removeFromCart, getUser} from '../'

const stateful = (context,item) => {
  const state = {
    data: (context && item) ? context.state[item] : this.data,
    bind: context ? context : this.bind,
    loaded: false,
    addToCart(item){
      addToCart(this, item)
    },
    removedataFromCart(item){
      removeFromCart(this, item)
    },
    getUser(){
      getUser(this)
    }
  }

  return state
}

const store = {
  data: {},
  stateful(context, item){
    this.data = stateful(context, item)
    return this
  },
  transform(val){
    this.data.bind.setState({ val })
    this.data.data = Object.assign(this.data.data, val)
  },
  get(){
    return this.data.data
  }
}


export default store
