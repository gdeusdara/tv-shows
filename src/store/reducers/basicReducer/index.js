const basicReducer = (actions = { start: 'START', success: 'SUCCESS', failure: 'FAILURE' }) => {
  const initialState = {
    loading: false,
    data: null,
    extraData: {},
    errorMessage: ''
  }

  const actionObj = {
    type: '',
    data: null,
    extraData: null,
    error: ''
  }

  function reducer(state = initialState, action = actionObj) {
    switch (action.type) {
      case actions.start:
        return {
          ...state,
          loading: true,
          data: null,
        };
      case actions.success:
        const newState = {
          ...state,
          loading: false,
          data: action.data,
          errorMessage: ''
        }

        if (action.extraData) {
          newState.extraData = {...state.extraData, ...action.extraData}
        }

        return newState;
      case actions.failure:
        return {
          ...state,
          loading: false,
          errorMessage: action.error || ''
        };
      default:
        return state;
    }
  }

  return { initialState, reducer };
}

export default basicReducer;
