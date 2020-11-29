import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import currencyReducer from './reducers/currencyReducer';
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  currencyReducer,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;
