const basicAction = ({
  SUCCESS = '', START = '', FAILURE = '', action = async () => {},
}) => {
  const onStart = () => ({
    type: START,
  });

  const onSuccess = (data, extraData) => ({
    type: SUCCESS,
    data,
    extraData,
  });

  const onFailure = (error) => ({
    type: FAILURE,
    error,
  });

  return function defaultAction(params) {
    return async (dispatch, getState) => {
      await action({
        params,
        state: getState(),
        onStart: () => dispatch(onStart()),
        onSuccess: (data, extraData) => dispatch(onSuccess(data, extraData)),
        onFailure: (error) => dispatch(onFailure(error)),
      });
    };
  };
};

export default basicAction;
