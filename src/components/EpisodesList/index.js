import { ActivityIndicator } from '@components/Basic/ActivityIndicator';
import { Container } from '@components/Basic/Container';
import { tvshowType } from '@constants/types';
import PropTypes from 'prop-types';
import React from 'react';
import { SectionList } from 'react-native';
import Item from './Item';
import { SectionTitle } from './styles';

function EpisodesList({
  data,
  loading,
}) {
  const renderItem = ({ item }) => (
    <Item item={item} />
  );

  const header = ({ section: { season } }) => <SectionTitle>{`Season ${season}`}</SectionTitle>;

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
      />
    </Container>
  );
}

EpisodesList.propTypes = {
  data: PropTypes.arrayOf(tvshowType),
  loading: PropTypes.bool,
};

EpisodesList.defaultProps = {
  data: [],
  loading: false,
};

export default EpisodesList;
