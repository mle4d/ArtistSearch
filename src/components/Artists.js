import React from 'react';
import PropTypes from 'prop-types';
import Artist from './Artist';


function Artists({ artists }) {
  const artistInfo = artists.map(artist => (
    <li key={artist.id}>
      <Artist {...artist} />
    </li>
  ));

  return (
    <ul>{artistInfo}</ul>
  );
}

Artists.propTypes = {
  artists: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired
};

export default Artists;
