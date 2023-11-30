import React, { useMemo, useState } from 'react'

const FacrComp_useMemo = () => {
    let [qty, setQty]=useState(1)
    let[num,setNum]=useState(5)
    //autocall when state is changed to avoid this function calling unnecessary use useMemo() hook
    //let factValue=fact(num)
    
    let factValue=useMemo(()=>{return fact(num)},[num])
  return (
    <div>
        <h1>Factorial Component</h1>
        <h3>Product Quantity:{qty}</h3>
        <h3>Factorial of {num} :{factValue}</h3>
        <button onClick={()=>{setQty(qty+1)}}> + </button>
        <button onClick={()=>{setNum(num+1)}}>Factorial+1</button>
    </div>
  )
}
let fact=(n)=>{
    let result=1
    for(let i=n; i>=2;i--){
        result=result*i
    }
    console.log(`factorial is:${result}`)
    return result
}
export default FacrComp_useMemo