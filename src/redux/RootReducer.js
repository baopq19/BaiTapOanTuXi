import { combineReducers } from 'redux'; 
import oanTuXiReducer from './OanTuXiReducer';

const rootReducer = combineReducers({
    stateOanTuXi: oanTuXiReducer,
})

export default rootReducer;