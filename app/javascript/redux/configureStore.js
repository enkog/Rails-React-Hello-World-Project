import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import rootReducer from './reducers/rootReducer';

const configureStore = () => {
  return createStore(
    rootReducer,
    applyMiddleware(logger, thunk)
  )
}

export default configureStore