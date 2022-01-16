import { ADD_MESSAGE } from "../actiontypes/index"

export const addMessage = (data) => {
    return{
        type: ADD_MESSAGE,
        payLoad:data

    }
}

