
import { ADD_JOB_APPLIED } from "../actiontypes/index"

export const jobApplied = (data) => {
    return{
        type: ADD_JOB_APPLIED,
        payload:data

    }
}

