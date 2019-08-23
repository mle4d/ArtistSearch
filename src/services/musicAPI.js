const NUM_PER_PAGE = 10;
const getAllPages = count => Math.ceil(count / NUM_PER_PAGE);
const request = (url, page) => {
  const offset = (page - 1) * NUM_PER_PAGE;
  return fetch(`${url}$limit=${NUM_PER_PAGE}&offset=${offset}`)
    .then(res => {
      if(!res.ok) throw 'NOPE';

      return res.json();
    });
};
export const searchArtist = (artist, page = 1) => {
  return request(`http://musicbrainz.org/ws/2/artist?query=${artist}&fmt=json&limit=10`, page)
    .then(({ artists, count }) => ({
      artists: artists.map(artist => ({ id: artist.id, name: artist.name })),
      allPages: getAllPages(count)
    }));
};
