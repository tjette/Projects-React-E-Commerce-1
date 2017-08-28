import {incrementStock, decrementStock, getProducts} from '../'

const stateful = (context,item) => {
  const state = {
    data: (context && item) ? context.state[item] : this.data,
    bind: context ? context : this.bind,
    loaded: false,
    incrementStock(){
      incrementStock(this)
    },
    decrementStock(){
      decrementStock(this)
    },
    getProducts(){
      getProducts(this)
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
