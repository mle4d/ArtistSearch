import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


function Artist({ artist }){
  console.log(artist);
  return (
    <Link to={`/artist/${artist.name}/${artist.id}`}>
      <section>
        <h2>{artist.name}</h2>
      </section>
    </Link>
  );
}

Artist.propTypes = {
  artist: PropTypes.shape({
    name: PropTypes.string.isRequired,
    disambiguation: PropTypes.string,
    id: PropTypes.id
  })
};

export default Artist;
