import React, {useRef} from 'react'

const RegiForm_useRef = () => {
    let btnRef=useRef(null)
    let tandcHandler=(event)=>{
        console.log(event.target.checked)
        btnRef.current.disabled=!event.target.checked
    }
  return (
    <>
    <h1>Registration Page</h1>
    <form>
    <label >Email id:</label>
    <input type="text" name="" id="" />
    <br /><br />
    <label >Mobile No:</label>
    <input type="number" name="" id="" />
    <br /><br />
    <label >Password:</label>
    <input type="password" name="" id="" />
    <br /><br />
    <input type="checkbox" onClick={tandcHandler} />Please Accept Terms & Conditions
    <br /><br />
    <input type="submit" value="Registration" disabled ref={btnRef}/>
    </form>
    </>
  )
}

export default RegiForm_useRef