import {
  FAVORITES_START,
  FAVORITES_SUCCESS,
  FAVORITES_FAILURE,
} from '@store/types/favorites';

import basicReducer from './basicReducer';

const { initialState, reducer } = basicReducer({
  start: FAVORITES_START,
  success: FAVORITES_SUCCESS,
  failure: FAVORITES_FAILURE,
});

export default reducer;

export { initialState };
