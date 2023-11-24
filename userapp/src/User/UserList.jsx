import React from 'react'

function UserList(props) {
    let selectUser=(u)=>{
        props.getUsers(u)
    }

    let users=props.users
  return (
     <>
     <h3>User List</h3>
     <pre>{JSON.stringify(users)}</pre>
     <table className='table'>
       <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Gender</th>
             </tr>
        </thead>
        <tbody>
            {
                users?.map((u,index)=>{
                    return <tr key={index} onMouseOver={selectUser.bind(u)}>
                            <td>{u.id}</td>
                            <td>{u.firstName}</td>
                            <td>{u.email}</td>
                            <td>{u.gender}</td>

                    </tr>
                })
            }

        </tbody>

     </table>
     
     </>
  )
}

export default UserList