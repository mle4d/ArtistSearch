import React, { Component } from 'react';
import Artists from '../Artists';
import { searchArtist } from '../../services/musicAPI';

class ArtistResults extends Component {
  state = {
    artists: []
  };
  
  fetch = () => {
    searchArtist(this.state.artist)
      .then(({ artists }) => {
        this.setState({ artists });
      }); 
  }
  changeInput = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }
  handleSearch = () => {
    event.preventDefault();
    this.fetch(); 
  }
  
  render() {

    return (
    <>
      <Artists artists={this.state.artists}/>
    </>
    );
  }
}
export default ArtistResults;
