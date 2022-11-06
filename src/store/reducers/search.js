import {
  SEARCH_START,
  SEARCH_SUCCESS,
  SEARCH_FAILURE,
} from '@store/types/search';

import basicReducer from './basicReducer';

const { initialState, reducer } = basicReducer({
  start: SEARCH_START,
  success: SEARCH_SUCCESS,
  failure: SEARCH_FAILURE,
});

export default reducer;

export { initialState };
