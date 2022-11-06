import { combineReducers } from 'redux';
import list from './list';
import search from './search';
import details from './details';

const rootReducer = combineReducers({
  list,
  search,
  details,
});

export default rootReducer;
