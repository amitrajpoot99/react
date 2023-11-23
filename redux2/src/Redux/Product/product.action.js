//action types
let INCR='INCR'
let DECR='DECR'

//actions
let incrAction=()=>{
    return{type:INCR}
}

let decrAction=()=>{
    return{type:DECR}
}

export {incrAction,decrAction,INCR,DECR}