import {ADD_MESSAGE} from '../actiontypes/index'

const initialState = {
    message:[]
    
}
export const formReducer = (state =initialState, action) => {
    switch(action.type){
       case ADD_MESSAGE:
       return{...state, message:[...state.message, action.payLoad]}
        default:
     return state
    }
    

}

