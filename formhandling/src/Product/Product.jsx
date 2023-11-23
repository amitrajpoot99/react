import React, { useState } from 'react'

function Product() {

    let[product,setProduct]=useState({pName:"",price:"",qty:"",info:""})

    let updateHandler=(event)=>{
        setProduct({...product, [event.target.name]:event.target.value })
    }
    let submitHandler=(event)=>{
        event.preventDefault();
    }

  return (
    <div>
        <form onSubmit={submitHandler} >
            <label>Name:</label>
            <input type="text" onChange={updateHandler} name='pName' /> <br /><br />
            <label>Price:</label>
            <input type="text" onChange={updateHandler} name='price'/> <br /><br />
            <label>Qty:</label>
            <input type="text" onChange={updateHandler} name='qty'/> <br /><br />
            <label>Info:</label>
            <input type="text" onChange={updateHandler} name='info'/> <br /><br />
            <input type="submit"  value="Upload" />

        </form>

        <br /><br />
        <h3>{JSON.stringify(product)}</h3>
    </div>
  )
}

export default Product