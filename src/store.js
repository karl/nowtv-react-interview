import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';

export function reducer(state, action = {}) {
  const { type, payload } = action;

  switch (type) {
    case 'MESSAGES_LOADING_FULFILLED':
      return {
        ...state,
        messages: payload,
      }

    case 'MEMBERS_LOADING_FULFILLED':
      return {
        ...state,
        members: payload,
      }

    default:
      return state;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducer, {}, composeEnhancers(applyMiddleware(
  promiseMiddleware(), thunk
)));
