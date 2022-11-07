import React from 'react';
import PropTypes from 'prop-types';
import { tvshowType } from '@constants/types';
import Informations from '@components/Informations';
import {
  Content,
  Scroll,
} from './styles';

export default function Episode({ route }) {
  const { episode } = route.params;

  const details = [
    {
      name: 'Season',
      value: episode.season,
    },
    {
      name: 'Episode Number',
      value: episode.number,
    },
  ];

  const renderInfo = () => (
    <Informations info={episode} details={details} />
  );

  return (
    <Content>
      <Scroll>
        {renderInfo()}
      </Scroll>
    </Content>
  );
}

Episode.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({ episode: tvshowType }),
  }).isRequired,
};
