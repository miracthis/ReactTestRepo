import { Action } from "redux";

const INITIAL_STATE = {
    employers: [],
    cities: []
}



export const reducer = (state = INITIAL_STATE,action) => {

    switch(action.type){
        case 'GET_EMPLOYERS': 
        return {...state, employers: action.payload}
        
        case 'GET_CITIES': 
        return {...state, cities: action.payload}
        
        default: 
        return state;
    }
        
}