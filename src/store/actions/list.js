import api from "@services/api";
import * as types from "@store/types/list";
import basicAction from "./basicAction";

async function action({
  params,
  state,
  onStart,
  onSuccess,
  onFailure
}) {
  try {
    onStart()
    api.get('/shows', {
      params: {
        page: params.page || 1
      }
    })

    if (response.status !== 200) {
      onFailure('Error')
      return
    }

    if (params.page === 1 || !params.page) {
      onSuccess(response.data)
    } else {
      onSuccess([...state.list.data, response.data])
    }
  } catch (err) {
    dispatch(getLocationFailure('Ocorreu um erro tentar acessar localização'));
  }
}

const getList = basicAction({
  START: types.GET_LIST_START,
  SUCCESS: types.GET_LIST_SUCCESS,
  FAILURE: types.GET_LIST_FAILURE,
  action
})

export default getList