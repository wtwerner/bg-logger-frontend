import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import currentUser from './reducers/currentUser.js'
import games from './reducers/games.js'
import forms from './reducers/forms.js'
import userPlays from './reducers/userPlays.js'

const reducer = combineReducers({
  currentUser,
  games,
  forms,
  userPlays,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store