import {ADD_JOB_APPLIED} from '../actiontypes/index'

const initialState = {
    appliedJob:[]
    
}
export const appliedJobReducer = (state =initialState, action) => {
    switch(action.type){
       case ADD_JOB_APPLIED:
       return{...state, appliedJob:[...state.appliedJob, action.payload]}
        default:
     return state
    }
    

}


