import {combineReducers} from 'redux';

import signupForm from './signupReducer';
import userReducer from './userReducer';

export default combineReducers({
  signupForm,
  user: userReducer,
});
