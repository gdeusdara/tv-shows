import { combineReducers } from 'redux';
import list from './list';
import search from './search';

const rootReducer = combineReducers({
  list,
  search,
});

export default rootReducer;
