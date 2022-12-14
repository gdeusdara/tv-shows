import api from '@services/api';
import * as types from '@store/types/details';
import basicAction from './basicAction';

async function action({
  params,
  // state,
  onStart,
  onSuccess,
  onFailure,
}) {
  try {
    onStart();

    const response = await api.get(`shows/${params.id}/episodes`);

    const seasons = [];

    let currSeason = 1;
    let currSeasonList = [];

    response.data.forEach((item) => {
      if (item.season === currSeason) {
        currSeasonList.push(item);
      } else {
        if (currSeasonList.length) {
          seasons.push({
            season: currSeason,
            data: currSeasonList,
          });
        }

        currSeasonList = [item];
        currSeason = item.season;
      }
    });

    seasons.push({
      season: currSeason,
      data: currSeasonList,
    });

    onSuccess([...seasons]);
  } catch (err) {
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
