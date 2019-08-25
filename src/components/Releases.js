import React from 'react';
import PropTypes from 'prop-types';
import Release from './Release';

function Releases({ releases }) {
  const releaseElements = releases.map(release => (
    <li key={release.id}>
      <Release {...release} />
    </li>
  ));

  return (
    <ul>{releaseElements}</ul>
  );
}

Releases.propTypes = {
  releases: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    albumArt: PropTypes.string.isRequired
  })).isRequired
};

export default Releases;
