import React from 'react';
import PropTypes from 'prop-types';
import { tvshowType } from '@constants/types';
import getImageUrl from '@utils/getImageUrl';
import { Container } from '@components/Basic/Container';
import EpisodesList from '@components/EpisodesList';
import useDetails from '@hooks/useDetails';
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
  Section,
} from './styles';

export default function Details({ route }) {
  const { show } = route.params;

  const { list, loading, error } = useDetails({ id: show.id });

  return (
    <Content>
      <Scroll>
        <Poster source={getImageUrl(show.image, 'original')} />
        <TitleView>
          <Title>{show.name}</Title>
        </TitleView>
        <Container>
          <Section>
            <SectionTitle>Summary</SectionTitle>
            <Summary value={show.summary} />
          </Section>

          <Section>
            <Description>
              <Info>Genre(s): </Info>
              {show.genres.join(', ')}
            </Description>
          </Section>
          <Section>
            <Description>
              <Info>Days: </Info>
              {show.schedule.days.join(', ')}
            </Description>
          </Section>
          <Section>
            <Description>
              <Info>Time: </Info>
              {show.schedule.time}
            </Description>
          </Section>
        </Container>
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
