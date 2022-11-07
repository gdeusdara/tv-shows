import React, { useMemo, useRef } from 'react';
import { BottomSheetFlatList } from '@gorhom/bottom-sheet';
import PropTypes from 'prop-types';
import { tvshowType } from '@constants/types';
import {
  SectionTitle, TouchableTitle, Arrow, BottomSheet,
} from './styles';
import Item from './Item';

function SeasonSelectionBottomSheet({ season, onPressSeason, seasons }) {
  const sheetRef = useRef(null);

  const onPress = (item) => {
    sheetRef.current?.close();
    onPressSeason(item);
  };

  const renderItem = ({ item, index }) => (
    <Item item={item} onPress={() => onPress(index)} />
  );

  const snapPoints = useMemo(() => ['50%'], []);

  return (
    <>
      <TouchableTitle onPress={() => sheetRef.current?.snapToIndex(0)}>
        <SectionTitle>{season}</SectionTitle>
        <Arrow />
      </TouchableTitle>
      <BottomSheet
        ref={sheetRef}
        snapPoints={snapPoints}
        enablePanDownToClose
        index={-1}
      >
        <BottomSheetFlatList
          data={seasons}
          keyExtractor={(i) => i.season}
          renderItem={renderItem}
        />
      </BottomSheet>
    </>
  );
}

SeasonSelectionBottomSheet.propTypes = {
  seasons: PropTypes.arrayOf(PropTypes.shape({
    season: PropTypes.number,
    data: PropTypes.arrayOf(tvshowType),
  })),
  season: PropTypes.string,
  onPressSeason: PropTypes.func,
};

SeasonSelectionBottomSheet.defaultProps = {
  seasons: [],
  season: '',
  onPressSeason: () => {},
};

export default SeasonSelectionBottomSheet;
