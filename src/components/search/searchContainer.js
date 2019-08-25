import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Search from '../Search';
import Artists from '../Artists';
import { searchArtist } from '../../services/musicAPI';
import { Paging } from '../../Paging';

class SearchContainer extends Component {
  static propTypes = {
    page: PropTypes.number.isRequired,
    setAllPages: PropTypes.func.isRequired
  }
  state = {
    artist: '',
    artists: [],
  };
  
  fetch = () => {
    searchArtist(this.state.artist, this.props.page)
      .then(({ artists, allPages }) => {
        this.setState({ artists });
        this.props.setAllPages(allPages);
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
