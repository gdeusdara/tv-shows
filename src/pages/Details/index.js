import React from 'react';
import PropTypes from 'prop-types';
import { tvshowType } from '@constants/types';
import getImageUrl from '@utils/getImageUrl';
import { Container } from '@components/Basic/Container';
import {
  Content,
  Poster,
  TitleView,
  Title,
  SectionTitle,
  Description,
  Scroll,
  Summary,
  Info,
} from './styles';

export default function Details({ route }) {
  const { show } = route.params;
  console.log(show);

  return (
    <Content>
      <Scroll>
        <Poster source={getImageUrl(show.image, 'original')} />
        <TitleView>
          <Title>{show.name}</Title>
        </TitleView>
        <Container>
          <SectionTitle>Summary</SectionTitle>
          <Summary value={show.summary} />
        </Container>
      </Scroll>
    </Content>
  );
}

Details.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({ show: tvshowType }),
  }).isRequired,
};
