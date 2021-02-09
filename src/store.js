import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import users from './reducers/users.js';
import currentUser from './reducers/currentUser.js';
import loginForm from './reducers/loginForm.js'

const reducer = combineReducers({
  users,
  currentUser,
  loginForm
})

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export default store