import React from 'react';


function Artists({ artists }) {
  const artistInfo = artists.map(artist => (
    <li key={artist.id}>
      <Artist {...artist}/>
    </li>
  ));

  return (
    <ul>{artistInfo}</ul>
  );
}

Artists.propTypes = {
  artist: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,

  })).isRequired
};

export default Artists;
