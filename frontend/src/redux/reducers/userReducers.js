import {
    CREATE_USER_REQUEST,
    CREATE_USER_SUCCESS,
    CREATE_USER_Fail,
    CREATE_USER_RESET,
    LOGIN_USER_REQUEST,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_Fail,
    LOGIN_USER_RESET,
    LOGOUT_USER
} from '../constants/userConstants.js'


const createUserReducer = (state={}, action) => {
    switch(action.type){
        case CREATE_USER_REQUEST:
            return {loading:true}
        case CREATE_USER_SUCCESS:
            return {loading:false, success:true, user:action.payload}
        case CREATE_USER_Fail:
            return {loading:false, error:action.payload}
        case CREATE_USER_RESET:
            return {}
        default:
            return state
    }
}

const userInfoFromLocalStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
console.log(userInfoFromLocalStorage)

const loginUserReducer = (state = { userInfo: userInfoFromLocalStorage }, action) => {
    switch(action.type){
       case LOGIN_USER_REQUEST:
           return {loading:true}
       case LOGIN_USER_SUCCESS:
           return {loading:false,success:true,userInfo:action.payload}
       case LOGIN_USER_Fail:
           return {loading:false, error:action.payload}
       case LOGIN_USER_RESET:
            return {}
        case LOGOUT_USER:
            return {
                userInfo:{}
            }
       default:
           return state
    }
}

export {
    createUserReducer,
    loginUserReducer, 
    logout
}