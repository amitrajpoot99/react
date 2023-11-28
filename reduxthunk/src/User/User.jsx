import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { user_Action } from '../Redux/user.action'

const User = () => {
    let [user, setUser] = useState([])

    let users = useSelector((state) => {
        return state.users
    })


    let dispatch = useDispatch()

    useEffect(() => {
        dispatch(user_Action())
    }, [])

    return (
        <div>
            <h2>User Component</h2>
            <pre>{JSON.stringify(users)}</pre>
        </div>
    )
}

export default User