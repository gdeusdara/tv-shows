import {
  GET_LIST_START,
  GET_LIST_SUCCESS,
  GET_LIST_FAILURE,
} from '@store/types/list';

import basicReducer from './basicReducer';

const { initialState, reducer } = basicReducer({
  start: GET_LIST_START,
  success: GET_LIST_SUCCESS,
  failure: GET_LIST_FAILURE,
})

export default reducer

export { initialState };

