import React, { Component } from 'react';
import Search from '../Search';
import Artists from '../Artists';
import { searchArtist } from '../../services/musicAPI';

class SearchContainer extends Component {
  state = {
    artist: '',
    artists: [],
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
      <Search artist={this.state.artist} input={this.changeInput} search={this.handleSearch} />
      <Artists artists={this.state.artists}/>
    </>
    );
  }
}
export default SearchContainer;
