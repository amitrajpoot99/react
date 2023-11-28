import React from 'react'

function UserList(props) {

    let selectUser=(user)=>{
        console.log(user)
        props.getUsers(user)
    }

    let users=props.allUsers;

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
                users?.map((user,index)=>{
                    return <tr key={index} onMouseOver={selectUser.bind(null,user)}>
                            <td>{user.id}</td>
                            <td>{user.firstName}</td>
                            <td>{user.email}</td>
                            <td>{user.gender}</td>

                    </tr>
                })
            }

        </tbody>

     </table>
     
     </>
  )
}

export default UserList