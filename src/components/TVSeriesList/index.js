import { Container } from '@components/Basic/Container';
import { ActivityIndicator } from '@components/Basic/ActivityIndicator';
import { tvshowType } from '@constants/types';
import PropTypes from 'prop-types';
import React from 'react';
import { FlatList, Keyboard } from 'react-native';
import Item from './Item';
import { Content, Message } from './styles';

function TVSeriesList({
  data,
  message,
  loading,
  onEndReached,
}) {
  const renderItem = ({ item }) => (
    <Item item={item} />
  );

  if (message) {
    return (
      <Container>
        <Content>
          <Message>{message}</Message>
        </Content>
      </Container>
    );
  }

  const listFooterComponent = () => {
    if (loading) return <ActivityIndicator />;

    return null;
  };

  return (
    <Container>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        onEndReachedThreshold={0.2}
        onEndReached={onEndReached}
        ListFooterComponent={listFooterComponent}
        onScrollBeginDrag={() => Keyboard.dismiss()}
        keyboardShouldPersistTaps="handled"
      />
    </Container>
  );
}

TVSeriesList.propTypes = {
  data: PropTypes.arrayOf(tvshowType),
  message: PropTypes.string,
  loading: PropTypes.bool,
  onEndReached: PropTypes.func,
};

TVSeriesList.defaultProps = {
  data: [],
  message: '',
  loading: false,
  onEndReached: () => {},
};

export default TVSeriesList;
