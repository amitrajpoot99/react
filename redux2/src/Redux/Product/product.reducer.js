//import action types
import {INCR,DECR} from './product.action'

let initialState={
    pId:'p101',
    pName:'Iphone15 Pro Max',
    qty:1
}

//It is a pure function takes 2 arguments state and action
//it update/write new store based on action type
let productReducer=(state=initialState,action)=>{
    switch(action.type){
        case INCR:
        return {...state,qty:state.qty+1}
        case DECR:
        return{...state, qty:state.qty-1}
        default:
        return state
    }
}

export {productReducer}