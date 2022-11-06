import {
  GET_DETAILS_START,
  GET_DETAILS_SUCCESS,
  GET_DETAILS_FAILURE,
} from '@store/types/details';

import basicReducer from './basicReducer';

const { initialState, reducer } = basicReducer({
  start: GET_DETAILS_START,
  success: GET_DETAILS_SUCCESS,
  failure: GET_DETAILS_FAILURE,
});

export default reducer;

export { initialState };
