import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import UserList from './UserList'
import UserDetail from './UserDetail'

function User() {
    let [userData,setUserData]=useState({})
    let[selUser,setSelUser]=useState()

   let getSelectedUser=(user)=>{
        setSelUser(user)
        
    }
    

    useEffect(()=>{
        Axios.get('https://dummyjson.com/users')
        .then((resp)=>{
            setUserData(resp.data)
        })
        .catch((err)=>{})
    },[])

  return (
    <>
        <h1>User Component</h1>
        <pre>{JSON.stringify(userData)}</pre>
        <pre>{}</pre>
        <div className="container">
            <div className='row'>
                <div className='col-8'>
                    {
                        Object.keys.length>0? <>
                        <UserList getUsers={getSelectedUser} allUsers={userData.users} />
                        </>
                        :
                        null
                    }
                </div>

                <div className='col-4'>
                    {
                        Object.keys.length>0?<><UserDetail selUser={selUser}/></>:<h3>No Data</h3>
                    }

                </div>

            </div>

        </div>
    </>
  )
}

export default User