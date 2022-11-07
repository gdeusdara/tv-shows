import { combineReducers } from 'redux';
import list from './list';
import search from './search';
import details from './details';
import favorites from './favorites';

const rootReducer = combineReducers({
  list,
  search,
  details,
  favorites,
});

export default rootReducer;
