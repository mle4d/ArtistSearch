import React, { PureComponent } from 'react';
import Artist from './Artist';
import { searchArtist } from '../services/musicAPI';

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
					<h1>Search for Artist</h1>
						<form onSubmit={this.fetchArtist}>
							<section>
								<input type="text" name="artistSearch" value="artistSearch" onChange={this.handleChange}></input>
							</section>
							<button>Search</button>
						</form>
				</>
	);
}

}
