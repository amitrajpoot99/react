import { createStore } from 'redux'
import {productReducer} from './Product/product.reducer'

let store =createStore(productReducer)

export{store}