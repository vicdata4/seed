import { createStore, applyMiddleware } from 'redux';
import { reducer } from './reducer.js';
import thunk from 'redux-thunk';

export const store = createStore(
  reducer,
  applyMiddleware(thunk)
);
