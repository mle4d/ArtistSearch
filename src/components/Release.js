import React from 'react';
import PropTypes from 'prop-types';

function Release({ id, title, albumArt }) {
  return (
    <>
      <img src={albumArt} />
      <p>{title}</p>
    </>
  );
}

Release.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  albumArt: PropTypes.string.isRequired
};

export default Release;
