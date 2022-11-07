import * as types from '@store/types/favorites';
import basicAction from './basicAction';

async function action({
  params,
  state,
  onSuccess,
  onFailure,
}) {
  try {
    let newFavorites = [];
    let newFavoritesDict = {};

    if (state.favorites.data && state.favorites.data.length) {
      newFavorites = [...state.favorites.data];
    }

    if (state.favorites.extraData) {
      newFavoritesDict = { ...state.favorites.extraData };
    }

    if (newFavoritesDict[params.id]) {
      newFavoritesDict[params.id] = false;
      newFavorites = newFavorites.filter((item) => item.id !== params.id);
    } else {
      newFavorites.push(params);
      newFavorites.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (b.name < a.name) {
          return 1;
        }
        return 0;
      });

      newFavoritesDict[params.id] = true;
    }

    onSuccess(newFavorites, { ...newFavoritesDict });
  } catch (err) {
    onFailure('An error has ocurred');
  }
}

const onAddToFavorites = basicAction({
  START: types.FAVORITES_START,
  SUCCESS: types.FAVORITES_SUCCESS,
  FAILURE: types.FAVORITES_FAILURE,
  action,
});

export default onAddToFavorites;
