import PropTypes from 'prop-types';

export const tvshowType = PropTypes.shape({
  id: PropTypes.number,
  name: PropTypes.string,
  image: PropTypes.shape({
    medium: PropTypes.string,
  }),
});
