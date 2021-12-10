import { JOB_MESSAGE } from '../actiontypes/jobtype'


const initialState = {
    jobMessage:[]
    
}
export const formJobReducer = (state =initialState, action) => {
    switch(action.type){
       case JOB_MESSAGE:
       return{...state, jobMessage:[...state.jobMessage, action.payLoad]}
        default:
     return state
    }
    

}