import React, { useState, useEffect } from 'react';
import * as S from './Song.module';
import { faPlay, faForward } from '@fortawesome/free-solid-svg-icons';
import { getAccessToken, fetchLauvAlbums } from '../../api/Api';

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
