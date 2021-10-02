import {createStore,combineReducers, applyMiddleware} from 'redux';
import {userRegisterReducer,userLoginReducer,userProfileReducer} from './reducers/userReducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from "redux-thunk";

const reducer=combineReducers({
    userRegisterReducer,
    userLoginReducer,
    userProfileReducer,


})
const middleware = [thunk];
const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware)),  
);
export default store;