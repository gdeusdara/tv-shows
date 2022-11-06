import api from '@services/api';
import * as types from '@store/types/details';
import basicAction from './basicAction';

async function action({
  params,
  state,
  onStart,
  onSuccess,
  onFailure,
}) {
  try {
    let { extraData } = state.details;

    if (!extraData) {
      extraData = {};
    }

    // caching
    if (extraData[params.id]) {
      onSuccess([...extraData[params.id]]);
      return;
    }

    onStart();

    const response = await api.get(`shows/${params.id}/episodes`);

    const seasons = [];

    let currSeason = 1;
    let currSeasonList = [];

    response.data.forEach((item) => {
      if (item.season === currSeason) {
        currSeasonList.push(item);
      } else {
        seasons.push({
          season: currSeason,
          data: currSeasonList,
        });

        currSeasonList = [];
        currSeason += 1;
      }
    });

    seasons.push({
      season: currSeason,
      data: currSeasonList,
    });

    // saving cache
    extraData[params.id] = seasons;

    onSuccess([...seasons], extraData);
  } catch (err) {
    console.log('err', err);
    onFailure('An error has ocurred while loading the episodes');
  }
}

const getDetails = basicAction({
  START: types.GET_DETAILS_START,
  SUCCESS: types.GET_DETAILS_SUCCESS,
  FAILURE: types.GET_DETAILS_FAILURE,
  action,
});

export default getDetails;
