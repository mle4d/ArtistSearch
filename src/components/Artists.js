import React from 'react';
import PropTypes from 'prop-types';
import Artist from './Artist';
import './artists.css';


function Artists({ artists }) {
  const artistList = artists.map(artist => (
    <section>
      <li key={artist.id}>
        <Artist artist={artist} />
      </li>
    </section>
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

