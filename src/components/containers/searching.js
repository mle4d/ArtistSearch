import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Search from '../Search';
import Artists from '../Artists';
import { searchArtist } from '../../services/musicAPI';

class Searching extends Component {
  static propTypes = {
    page: PropTypes.number.isRequired,
    setAllPages: PropTypes.func.isRequired
  }
  state = {
    searching: '',
    artists: [],
    error: null,
    loading: false
  };
  
  fetch = () => {
    searchArtist(this.state.searching, this.props.page)
      .then(({ artists, allPages }) => {
        this.setState({ artists, loading: false });
        this.props.setAllPages(allPages);
      }); 
  }
  
}
  
render() {
  const {

  } = this.state;

  return (
    <>
    </>
  )
}

export default withPaging(Search);