const basicReducer = (actions = { start: 'START', success: 'SUCCESS', failure: 'FAILURE' }) => {
  const initialState = {
    loading: false,
    data: null,
    extraData: null,
    errorMessage: '',
  };

  const actionObj = {
    type: '',
    data: null,
    extraData: null,
    error: '',
    extra: {},
  };

  function reducer(state = initialState, action = actionObj) {
    switch (action.type) {
      case actions.start:
        return {
          ...state,
          loading: true,
          ...action.extra,
        };
      case actions.success:
        return {
          ...state,
          loading: false,
          errorMessage: '',
          data: action.data,
          extraData: action.extraData,
        };
      case actions.failure:
        return {
          ...state,
          data: null,
          extraData: null,
          loading: false,
          errorMessage: action.error || '',
        };
      default:
        return state;
    }
  }

  return { initialState, reducer };
};

export default basicReducer;
