const initialState = {
    userDetails : '',
    loginError: ''
}

export default function Account_Reducer(state=initialState, action){
    switch(action.type){   
        case "LOGIN RESPONSE": 
        return {
            ...state, 
            userDetails: action.userDetails
        }     
        case "LOGIN ERROR":
        return {
            ...state,
            loginError: action.loginError
        }
        default:
        return state;
    }
}