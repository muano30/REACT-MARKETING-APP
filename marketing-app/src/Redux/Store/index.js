import {createStore, combineReducers} from 'redux'
import {formReducer} from '../reducers/index'
import { formJobReducer } from '../reducers/jobmessage'

export const store = createStore (combineReducers({loginInfo: formReducer, jobInfo: formJobReducer})
    ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

)