import { SING_IN } from "./AuthTypes";

const InicialState = {
    user: []
}

export default async function AuthReducer( state = InicialState, action){
   
    switch (action.type) {
        case SING_IN:
            return { ...state, user:action.payload}
    
        default:
           return state
    }
}