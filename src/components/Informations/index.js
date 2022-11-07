import React from 'react';
import PropTypes from 'prop-types';
import { episodeType, tvshowType } from '@constants/types';
import getImageUrl from '@utils/getImageUrl';
import { Container } from '@components/Basic/Container';
import {
  Content,
  Poster,
  TitleView,
  Title,
  SectionTitle,
  Description,
  Summary,
  Info,
  Section,
} from './styles';
import Favorite from './Favorite';

function Informations({ info, details, favorite }) {
  const renderInfo = () => details.map((item) => {
    if (!item.value) return null;

    return (
      <Section key={item.name}>
        <Description>
          <Info>{`${item.name}: `}</Info>
          {item.value}
        </Description>
      </Section>
    );
  });

  return (
    <Content>
      <Poster source={getImageUrl(info.image, 'original')} />
      <TitleView>
        <Title>{info.name}</Title>
      </TitleView>
      <Container>
        <Favorite item={info} favorite={favorite} />
        {info.summary ? (
          <Section>
            <SectionTitle>Summary</SectionTitle>
            <Summary value={info.summary} />
          </Section>
        ) : null}
        {renderInfo()}
      </Container>
    </Content>
  );
}

Informations.propTypes = {
  info: PropTypes.oneOfType([tvshowType, episodeType]).isRequired,
  details: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  })).isRequired,
  favorite: PropTypes.bool,
};

Informations.defaultProps = {
  favorite: false,
};

export default Informations;
