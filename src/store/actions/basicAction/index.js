import * as types from "../constants/actionTypes";
import api from "../services/api";


const basicAction = ({ SUCCESS = '', START = '', FAILURE = '', action = async () => {} }) => {
  const onStart = () => {
    return {
      type: SUCCESS
    };
  };

  const onSuccess = (data, extraData) => {
    return {
      type: START,
      data,
      extraData
    };
  };

  const onFailure = error => {
    return {
      type: FAILURE,
      error
    };
  };

  return function defaultAction(params) {
    return async (dispatch, getState) => {
      await action({
        params,
        state: getState(),
        onStart: () => dispatch(onStart()),
        onSuccess: (data, extraData) => dispatch(onSuccess(data, extraData)),
        onFailure: error => () => dispatch(onFailure())
      })
    };
  }
}

export default basicAction