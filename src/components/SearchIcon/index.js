import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import PropTypes from 'prop-types';

export default function SearchIcon({ size, color }) {
  const theme = useTheme();

  return (
    <AntDesign
      name="search1"
      size={size || theme.sizes.LX}
      color={color || theme.colors.text}
    />
  );
}

SearchIcon.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};

SearchIcon.defaultProps = {
  size: 0,
  color: '',
};
