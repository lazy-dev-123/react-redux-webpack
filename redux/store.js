import { applyMiddleware, compose, createStore } from 'redux'
import rootReducer from './reducers'
import { createLogger } from 'redux-logger'

let finalCreateStore = compose(
	applyMiddleware(createLogger())
)(createStore)

export default function configureStore(initialState = {todos: [], user: {}}) {
	return finalCreateStore(rootReducer, initialState)
}