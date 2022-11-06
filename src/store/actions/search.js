import api from '@services/api';
import * as types from '@store/types/search';
import basicAction from './basicAction';

async function action({
  params,
  onStart,
  onSuccess,
  onFailure,
}) {
  try {
    onStart({ data: null });
    const response = await api.get('search/shows', {
      params: {
        q: params.q,
      },
    });

    onSuccess(response.data.map((item) => item.show));
  } catch (err) {
    onFailure('An error has ocurred');
  }
}

const onSearch = basicAction({
  START: types.SEARCH_START,
  SUCCESS: types.SEARCH_SUCCESS,
  FAILURE: types.SEARCH_FAILURE,
  action,
});

export default onSearch;
