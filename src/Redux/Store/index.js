import {createStore, combineReducers} from 'redux'
import {formReducer} from '../reducers/index'
import { formJobReducer } from '../reducers/jobmessage'
import { appliedJobReducer } from '../reducers/jobapplied'

const combinedReducers = combineReducers({loginInfo: formReducer, jobInfo: formJobReducer, appliedJob:appliedJobReducer})
export const store = createStore ( combinedReducers
    ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

)