export const searchArtist = (id) => {
  return fetch(`http://musicbrainz.org/ws/2/artist/${id}?fmt=json&inc=works`)
    .then(res => res.json())
    .then(json => ({
      artists: json.artists,
      count: json.count,
      offset: json.offset
    }));
      
};

