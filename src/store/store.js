import { createStore, applyMiddleware, combineReducers } from 'redux';
import { users } from './reducers/users-reducer';
import { notes } from './reducers/notes-reducer';
import thunk from 'redux-thunk';

export const store = createStore(
  combineReducers({
    users,
    notes
  }),
  applyMiddleware(thunk)
);
