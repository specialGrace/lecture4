import { createStore, applyMiddleware} from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/index'

 
const middleware = [thunk]

let devTools;
if(process.env.NODE_ENV === 'development'){
    devTools = composeWithDevTools(applyMiddleware(...middleware))
}else{
    devTools = applyMiddleware(...middleware)
}
 

const userInfoFromLocalStorage = localStorage.getItem('userInfo') ?  JSON.parse(localStorage.getItem('userInfo')) : null
console.log(userInfoFromLocalStorage)

const initialState = {
    userLogin: {userInfo: userInfoFromLocalStorage}
}

const store = createStore(rootReducer,initialState , devTools)

console.log(store)

export default store