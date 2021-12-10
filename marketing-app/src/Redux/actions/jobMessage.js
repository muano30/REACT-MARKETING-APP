import { JOB_MESSAGE } from "../actiontypes/jobtype"


export const jobMessage = (data) => {
    return{
        
        type: JOB_MESSAGE,
        payLoad:data
    } 

}