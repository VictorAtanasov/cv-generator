import { combineReducers } from 'redux';
import userReducers from './userReducers';
import cvReducers from './cvReducers';
 
const rootReducer = combineReducers({
    user: userReducers,
    cv: cvReducers
})

export default rootReducer