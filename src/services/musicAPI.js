const NUM_PER_PAGE = 10;
export const searchArtist = (artist, page = 1) => {
  const offset = (page - 1) * NUM_PER_PAGE;
  return fetch(`http://musicbrainz.org/ws/2/artist?query=${artist}&fmt=json&limit=10`)
    .then(res => {
      if(!res.ok) throw 'NOPE';
      return res.json();
    })
    .then(({ artists, count }) => ({
      artsts: artists.map(artist => ({ id: artist.id, name: artist.name })),
      totalPages: Math.ceil(count / NUM_PER_PAGE)
    }));  
};
