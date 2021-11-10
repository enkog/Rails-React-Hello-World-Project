import { combineReducers } from 'redux'
import greetingsReducer from './greetingsReducer';

const rootReducer = combineReducers({
  greetings: greetingsReducer
});

export default rootReducer;