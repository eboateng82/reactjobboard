import { combineReducers } from 'redux';
import searchReducer from './searchReducer';
import filterReducer from './filterReducer';

const appReducer = combineReducers({
    jobs: searchReducer, 
    filter: filterReducer
});

export default appReducer;