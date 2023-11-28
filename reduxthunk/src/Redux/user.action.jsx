import Axios from 'axios'
//Action types
let USER_REQ = 'USER_REQ'
let USER_SUCCESS = 'USER_SUCCESS'
let USER_FAILURE = 'USER_FAILURE'

let user_Req_Action = () => {
    return { type: USER_REQ }
}
let user_Success_Action = (user) => {
    return { type: USER_SUCCESS, payload: user }
}
let user_Filure_Action = () => {
    return { type: USER_FAILURE, payload: 'Failed' }
}

let user_Action = () => {
    return async (dispatch) => {
        dispatch(user_Req_Action())
        Axios.get('https://jsonplaceholder.typicode.com/users')
            .then((res) => {
                dispatch(user_Success_Action(res.data))
            })
            .catch((err) => {
                dispatch(user_Filure_Action())
            })
    }
}
export { user_Action, USER_REQ, USER_SUCCESS, USER_FAILURE }