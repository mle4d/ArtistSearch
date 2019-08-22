import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { searchArtist } from '../services/musicAPI';

export default class Artist extends PureComponent {
 state = {
   artist: ''
 }
fetchArtist = () => {
  searchArtist(this.props.match.params.id)
    .then(res => {
      this.setState({
        artist: res.artist
      });
    });
}
render() {
  return (
    <section>
      <h2>{this.state.artist}</h2>
    </section>
  );
}
}
Artist.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    })
  })
};

