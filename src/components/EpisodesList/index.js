import { ActivityIndicator } from '@components/Basic/ActivityIndicator';
import { Container } from '@components/Basic/Container';
import { tvshowType } from '@constants/types';
import PropTypes from 'prop-types';
import React from 'react';
import { FlatList } from 'react-native';
import Item from './Item';

function EpisodesList({
  data,
  loading,
}) {
  const renderItem = ({ item }) => (
    <Item item={item} />
  );

  const renderEmptyComponent = () => {
    if (loading) return <ActivityIndicator />;

    return null;
  };

  return (
    <Container>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
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
