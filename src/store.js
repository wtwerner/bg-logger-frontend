import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import currentUser from './reducers/currentUser.js';
import games from './reducers/games.js';
import loginForm from './reducers/loginForm.js'
import signupForm from './reducers/signupForm.js'
import discoverForm from './reducers/discoverForm.js'
import playForm from './reducers/playForm.js'
import userPlays from './reducers/userPlays.js'

const reducer = combineReducers({
  currentUser,
  loginForm,
  playForm,
  games,
  discoverForm,
  userPlays,
  signupForm
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store