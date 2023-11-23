import React from 'react'

//dispatch action
import{useDispatch,useSelector} from 'react-redux'
import {incrAction,decrAction} from '../Redux/Product/product.action'


function Product() {

    let product=useSelector((state)=>{
        return state
    })
    let dispatch=useDispatch()

    let dercHandler=()=>{
        dispatch(decrAction())
    }

    let incrHandler=()=>{
        dispatch(incrAction())
    }
  return (
    <div>
        <h3>Product Component</h3>
        <p>{JSON.stringify(product)}</p>
        <button onClick={dercHandler}>-</button>
        <> {product.qty} </>
        <button onClick={incrHandler}>+</button>


    </div>
  )
}

export default Product