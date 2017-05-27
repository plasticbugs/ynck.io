import { combineReducers } from 'redux';
import TattooReducer from './reducers/reducer_tattoos';

const rootReducer = combineReducers({
  tattooList: TattooReducer
});

module.exports = rootReducer;