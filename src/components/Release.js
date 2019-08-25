import React from 'react';
import PropTypes from 'prop-types';

function Release({ id, title, albumArt, release }) {
  return (
    <>
    <li key={release.id}></li>
      <img src={albumArt} />
      <p>{title}</p>
    </>
  );
}

Release.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  albumArt: PropTypes.string.isRequired,
  release: PropTypes.string.isRequired
};

export default Release;
