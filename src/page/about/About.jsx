import React, { useState, useEffect } from 'react';
import { getAccessToken, fetchArtistInfo } from '../../api/Api';
import * as S from './About.module';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';

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
    <S.AboutContainer>
      <S.AboutComponent>
        {artistInfo ? (
          <div>
            <h1>{artistInfo.name}</h1>
            <img src={artistInfo.images[0].url} />
            <h2>August 8, 1994</h2>
            <S.IconWrapper>
              <S.LinkSns to="https://www.instagram.com/lauvsongs/">
                <InstagramIcon style={{ fontSize: 40, marginRight: 15 }} />
              </S.LinkSns>
              <S.LinkSns to="https://www.facebook.com/lauvsongs/">
                <FacebookIcon style={{ fontSize: 40, marginRight: 15 }} />
              </S.LinkSns>
              <S.LinkSns to="https://www.youtube.com/channel/UCfLdIEPs1tYj4ieEdJnyNyw">
                <YouTubeIcon style={{ fontSize: 40 }} />
              </S.LinkSns>
            </S.IconWrapper>
          </div>
        ) : (
          <p>Loading artist information...</p>
        )}
      </S.AboutComponent>
    </S.AboutContainer>
  );
};

export default Song;
