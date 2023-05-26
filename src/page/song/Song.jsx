import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as S from './Song.module';
import { faPlay, faForward } from '@fortawesome/free-solid-svg-icons';

const Song = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const getLauvAlbums = async () => {
      const clientId = 'a229f902b30f4479b776347a37bb4620';
      const clientSecret = '1751ae56d1c14a4aa4fce4a2e955a635';
      const accessToken = await getAccessToken(clientId, clientSecret);
      const lauvAlbums = await fetchLauvAlbums(accessToken);
      setAlbums(lauvAlbums);
    };
    getLauvAlbums();
  }, []);

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

  return (
    <S.BoxContainer>
      {albums.map(album => (
        <S.Box key={album.id}>
          <S.Image src={album.images[0].url} alt={album.name} />
          <S.RightContainer>
            <h2>{album.name}</h2>
            <h1>{album.artists.map(artist => artist.name).join(', ')}</h1>
            <S.IconContainer>
              <S.LeftIcon icon={faForward} />
              <S.CenterIcon icon={faPlay} />
              <S.RightIcon icon={faForward} />
            </S.IconContainer>
          </S.RightContainer>
        </S.Box>
      ))}
    </S.BoxContainer>
  );
};

export default Song;
