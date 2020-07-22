import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import weatherReducer from './reducers/weatherReducer';
import searchReducer from './reducers/searchReducer';
import forecastReducer from './reducers/forecastReducer';

const reducers = combineReducers({
  weather: weatherReducer,
  search: searchReducer,
  forecast: forecastReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
