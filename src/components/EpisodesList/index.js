import { ActivityIndicator } from '@components/Basic/ActivityIndicator';
import { Container } from '@components/Basic/Container';
import { tvshowType } from '@constants/types';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { LayoutAnimation, SectionList } from 'react-native';
import Item from './Item';
import { SectionTitle, TouchableTitle } from './styles';

function EpisodesList({
  data,
  loading,
  ListHeaderComponent,
}) {
  const [sectionToRender, setSectionToRender] = useState({});

  const renderItem = ({ item, section }) => (sectionToRender[section.season] ? (
    <Item item={item} />
  ) : null);

  const onPressSection = (season) => {
    sectionToRender[season] = !sectionToRender[season];
    LayoutAnimation.easeInEaseOut();
    setSectionToRender({ ...sectionToRender });
  };

  const header = ({ section: { season } }) => (
    <TouchableTitle onPress={() => onPressSection(season)}>
      <SectionTitle>{`Season ${season}`}</SectionTitle>
    </TouchableTitle>
  );

  const renderEmptyComponent = () => {
    if (loading) return <ActivityIndicator />;

    return null;
  };

  return (
    <Container>
      <SectionList
        sections={data}
        stickySectionHeadersEnabled
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        renderSectionHeader={header}
        ListEmptyComponent={renderEmptyComponent}
        ListHeaderComponent={ListHeaderComponent}
      />
    </Container>
  );
}

EpisodesList.propTypes = {
  data: PropTypes.arrayOf(tvshowType),
  loading: PropTypes.bool,
  ListHeaderComponent: PropTypes.element,
};

EpisodesList.defaultProps = {
  data: [],
  loading: false,
  ListHeaderComponent: () => {},
};

export default EpisodesList;
