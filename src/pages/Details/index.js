import React from 'react';
import PropTypes from 'prop-types';
import { tvshowType } from '@constants/types';
import EpisodesList from '@components/EpisodesList';
import useDetails from '@hooks/useDetails';
import Informations from '@components/Informations';
import {
  Content,
  Scroll,
} from './styles';

export default function Details({ route }) {
  const { show } = route.params;

  const { list, loading, error } = useDetails({ id: show.id });

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
    <Informations info={show} details={details} />
  );

  return (
    <Content>
      <Scroll>
        {renderInfo()}
        <EpisodesList data={list} loading={loading} message={error} />
      </Scroll>
    </Content>
  );
}

Details.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({ show: tvshowType }),
  }).isRequired,
};
