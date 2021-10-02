import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_PROFILE_FAIL, USER_PROFILE_REQUEST, USER_PROFILE_SUCCESS, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from "../constants/userConstants";

const initialState ={loading:false,userInfo:null,error:null}
export const userRegisterReducer =(state=initialState,action) =>{
    switch(action.type){
        case USER_REGISTER_REQUEST:
            return {...state,loading:true}
        case USER_REGISTER_SUCCESS:
            return {...state,loading:false,userInfo:action.payload}
        case USER_REGISTER_FAIL:
            return {...state,loading:false,error:action.payload}     
       
        default:
            return state;    

    }
}

export const userLoginReducer = (state=initialState,action) =>{
    switch(action.type){
        case USER_LOGIN_REQUEST:
            return {...state,loading:true}
        case USER_LOGIN_SUCCESS:
            return {...state,isLogin:true, loading:false,userInfo:action.payload} 
        case USER_LOGIN_FAIL:
            return {...state, loading:false,error:action.payload}  
                 
        default:
            return state;    
    }

}

export const userProfileReducer =(state=initialState,action) =>{
    switch(action.type){
        case USER_PROFILE_REQUEST:
            return {...state,loading:true}
        case USER_PROFILE_SUCCESS:
            return {...state,loading:false,userInfo:action.payload}
        case USER_PROFILE_FAIL:
            return {...state,loading:false,error:action.payload}     

        default:
            return state;    

    }
}