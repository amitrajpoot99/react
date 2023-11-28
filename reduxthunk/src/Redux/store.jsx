import { applyMiddleware, configureStore, createStore } from '@reduxjs/toolkit'
import { user_Reducer } from './user.reducer'
import { composeWithDevTools } from '@redux-devtools/extension'
import thunk from 'redux-thunk'
import logger from 'redux-logger'


let store = createStore(user_Reducer, composeWithDevTools(applyMiddleware(thunk, logger)))
export { store }