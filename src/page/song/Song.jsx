import React, { useState, useEffect } from 'react';
import * as S from './Song.module';
import { faPlay, faForward } from '@fortawesome/free-solid-svg-icons';
import { getAccessToken, fetchAlbums } from '../../api/Api';

const Song = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const getLauvAlbums = async () => {
      const clientId = 'a229f902b30f4479b776347a37bb4620';
      const clientSecret = '1751ae56d1c14a4aa4fce4a2e955a635';
      const accessToken = await getAccessToken(clientId, clientSecret);
      const artistId = '5JZ7CnR6gTvEMKX4g70Amv';
      const lauvAlbums = await fetchAlbums(accessToken, artistId);
      setAlbums(lauvAlbums);
    };
    getLauvAlbums();
  }, []);

  return (
    <S.BoxContainer>
      {albums.map(album => (
        <S.StyledLink to={`/song/detail/${album.id}`} key={album.id}>
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
        </S.StyledLink>
      ))}
    </S.BoxContainer>
  );
};

export default Song;
