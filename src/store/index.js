import { combineReducers } from 'redux';
import Account_Reducer from './AuthenticationReducer';

const Store = combineReducers(
    {
        authentication : Account_Reducer,
    }
);

  
export default Store;