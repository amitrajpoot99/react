import React from 'react'

function UserDetail(props) {
    let {allUser}=props
   
  return (
        <>
        <h1>User Details</h1>
        <pre>{JSON.stringify(allUser)}</pre>

        {/* <div className='card'>
            <div className='card-header'>
              <img src={user.image} alt="" /> 
              <h3>{user.firstName}</h3> 
            </div>


        </div> */}
        </>
  )
}

export default UserDetail