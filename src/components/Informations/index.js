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
  Summary,
  Info,
  Section,
} from './styles';

export default function Informations({ info, details }) {
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
        <Section>
          <SectionTitle>Summary</SectionTitle>
          <Summary value={info.summary} />
        </Section>
        {renderInfo()}
      </Container>
    </Content>
  );
}

Informations.propTypes = {
  info: tvshowType.isRequired,
  details: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.string,
  })).isRequired,
};
