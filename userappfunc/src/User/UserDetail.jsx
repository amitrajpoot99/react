import React from 'react'

function UserDetail(props) {
    let {selUser}=props
   
  return (
        <>
        <h1>User Details</h1>
        <pre>{JSON.stringify(selUser)}</pre>

         <div className='card'>
            <div className='card-header'>
              <img src={selUser.image} alt="" /> 
              <h3>{selUser.firstName}</h3> 
            </div>


        </div> 
        </>
  )
}

export default UserDetail