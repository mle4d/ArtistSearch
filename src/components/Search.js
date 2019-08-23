import React from 'react';
import PropTypes from 'prop-types';
import './search.css';

function Search({ artist, input, search }) {
  return (
        <>
        <header>
          <h1>Music Scoops</h1>
        </header>
          <p>Get the scoop here!</p>
            <form onSubmit={search}>
              <input placeholder="type here" type="text" name="artist" value={artist} onChange={input}></input>
              <button>Search</button>
            </form>
          
          </>
  );
}
Search.propTypes = {
  artist: PropTypes.string.isRequired,
  input: PropTypes.func.isRequired,
  search: PropTypes.func.isRequired
};
export default Search;
