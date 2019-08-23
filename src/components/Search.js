import React, { PureComponent } from 'react';
import Artist from './Artist';
import { searchArtist } from '../services/musicAPI';
import './search.css';

export default class Search extends PureComponent {
  state = {
    artist: '',
    artistSearch: '',
    count: 1,
    offset: 0
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name ]: target.value });
  }

  fetchArtist = (event) => {
    event.preventDefault();
    searchArtist(this.state.artistSearch)
      .then(res => {
        this.setState({
          artist: res.artist,
          count: res.count,
          offset: res.offset
        });
      });
  }

  render() {
    const { artist, artistSearch, count, offset } = this.state;
    return (
        <>
        <header>
          <h1>Music Scoops</h1>
          <h2>Make any artist appear!</h2>
        </header>
          <section>
            <form onSubmit={this.fetchArtist}>
              <input type="text" name="artistSearch" value={this.state.artistSearch} onChange={this.handleChange}></input>
              <button>Search</button>
            </form>
          </section>
          </>
    );
  }
}
