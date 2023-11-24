import React from 'react'

function UserDetail(props) {
    let{user}=props
  return (
        <>
        <h1>User Detail</h1>
        <pre>{JSON.stringify(user)}</pre>
        <div className='card'>
            <div className='card-header'>
               {/*  <img src={user.image} alt="" /> */}
             {/*   <h3>{user.firstName}</h3> */}
            </div>


        </div>
        </>
  )
}

export default UserDetail