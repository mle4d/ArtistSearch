import React from 'react';
import PropTypes from 'prop-types';
import Artist from './Artist';


function Artists({ artists }) {
  const artistList = artists.map(artist => (
    <li key={artist.id}>
      <Artist artist={artist} />
    </li>
  ));

  return (
    <ul>{artistList}</ul>
  );
}

Artists.propTypes = {
  artists: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired
};

export default Artists;

