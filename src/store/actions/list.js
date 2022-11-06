import api from '@services/api';
import * as types from '@store/types/list';
import basicAction from './basicAction';

async function action({
  params,
  state,
  onStart,
  onSuccess,
  onFailure,
}) {
  try {
    onStart();
    const response = await api.get('shows', {
      params: {
        page: params.page || 1,
      },
    });

    if (response.status !== 200) {
      onFailure('Error');
      return;
    }

    if (params.page === 1 || !params.page) {
      onSuccess(response.data);
    } else {
      onSuccess([...state.list.data, ...response.data], !response.data.length);
    }
  } catch (err) {
    console.log('err', err);
    onFailure('An error has ocurred');
  }
}

const getList = basicAction({
  START: types.GET_LIST_START,
  SUCCESS: types.GET_LIST_SUCCESS,
  FAILURE: types.GET_LIST_FAILURE,
  action,
});

export default getList;
