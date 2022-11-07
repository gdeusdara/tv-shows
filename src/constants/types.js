import PropTypes from 'prop-types';

export const tvshowType = PropTypes.shape({
  id: PropTypes.number,
  name: PropTypes.string,
  image: PropTypes.shape({
    medium: PropTypes.string,
    original: PropTypes.string,
  }),
  summary: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.string),
  schedule: PropTypes.shape({
    time: PropTypes.string,
    days: PropTypes.arrayOf(PropTypes.string),
  }),
});

export const episodeType = PropTypes.shape({
  id: PropTypes.number,
  name: PropTypes.string,
  image: PropTypes.shape({
    medium: PropTypes.string,
    original: PropTypes.string,
  }),
  summary: PropTypes.string,
  number: PropTypes.number,
  season: PropTypes.number,
});
