import React from 'react';
import PropTypes from 'prop-types';
import { tvshowType } from '@constants/types';
import EpisodesList from '@components/EpisodesList';
import useDetails from '@hooks/useDetails';
import Informations from '@components/Informations';
import SeasonSelectionBottomSheet from '@components/SeasonSelectionBottomSheet';
import {
  Container,
  Content,
  Scroll,
} from './styles';

export default function Details({ route }) {
  const { show } = route.params;

  const {
    list, loading, error, setCurrSeason, currSeason,
  } = useDetails({ id: show.id });

  const details = [
    {
      name: 'Genre(s)',
      value: show.genres?.join(', '),
    },
    {
      name: 'Days',
      value: show.schedule?.days?.join(', '),
    },
    {
      name: 'Time',
      value: show.schedule?.time,
    },
  ];

  const renderInfo = () => (
    <Informations info={show} details={details} favorite />
  );

  return (
    <Container>
      <Content>
        <Scroll>
          {renderInfo()}
          <EpisodesList data={list?.[currSeason]?.data} loading={loading} message={error} />
        </Scroll>
        <SeasonSelectionBottomSheet
          onPressSeason={(item) => setCurrSeason(item)}
          seasons={list}
          season={list?.[currSeason] ? `Season ${list[currSeason].season}` : 'Loading...'}
        />
      </Content>
    </Container>
  );
}

Details.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({ show: tvshowType }),
  }).isRequired,
};
