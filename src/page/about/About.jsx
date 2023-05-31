import React, { useState, useEffect } from 'react';
import { getAccessToken, fetchArtistInfo } from '../../api/Api';

const Song = () => {
  const [artistInfo, setArtistInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const clientId = 'a229f902b30f4479b776347a37bb4620';
        const clientSecret = '1751ae56d1c14a4aa4fce4a2e955a635';
        const accessToken = await getAccessToken(clientId, clientSecret);
        const artistId = '5JZ7CnR6gTvEMKX4g70Amv';
        const artistData = await fetchArtistInfo(artistId, accessToken);
        setArtistInfo(artistData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {artistInfo ? (
        <div>
          <img src={artistInfo.images[0].url} />
          <p>{artistInfo.name}</p>
          <p>{artistInfo.genres}</p>
        </div>
      ) : (
        <p>Loading artist information...</p>
      )}
    </div>
  );
};

export default Song;
