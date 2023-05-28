import axios from 'axios';

const getAccessToken = async (clientId, clientSecret) => {
  const response = await axios.post(
    'https://accounts.spotify.com/api/token',
    'grant_type=client_credentials',
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Basic ' + btoa(clientId + ':' + clientSecret),
      },
    }
  );
  return response.data.access_token;
};

const fetchLauvAlbums = async accessToken => {
  const response = await axios.get(
    'https://api.spotify.com/v1/search?q=lauv&type=album',
    {
      headers: {
        Authorization: 'Bearer ' + accessToken,
      },
    }
  );
  return response.data.albums.items;
};

const fetchArtistInfo = async (artistId, accessToken) => {
  const response = await axios.get(
    `https://api.spotify.com/v1/artists/${artistId}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  return response.data;
};

export { getAccessToken, fetchLauvAlbums, fetchArtistInfo };
