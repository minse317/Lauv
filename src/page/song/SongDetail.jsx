import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getAccessToken, fetchAlbums, fetchAlbumList } from '../../api/Api';

const SongDetail = () => {
  const { albumId } = useParams();
  const [album, setAlbum] = useState(null);
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    const getAlbumData = async () => {
      const clientId = 'a229f902b30f4479b776347a37bb4620';
      const clientSecret = '1751ae56d1c14a4aa4fce4a2e955a635';
      const accessToken = await getAccessToken(clientId, clientSecret);
      const artistId = '5JZ7CnR6gTvEMKX4g70Amv';

      /* 앨범 정보 가져오기 */
      const albums = await fetchAlbums(accessToken, artistId);
      const albumData = albums.find(album => album.id === albumId);
      setAlbum(albumData);

      /* 앨범 트랙 목록 가져오기 */
      const albumTracks = await fetchAlbumList(accessToken, albumId);
      setTracks(albumTracks);
    };
    getAlbumData();
  }, [albumId]);

  if (!album) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {album.images && album.images.length > 0 && (
        <img src={album.images[0].url} alt={album.name} />
      )}
      <ul>
        {tracks.map(track => (
          <li key={track.id}>{track.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SongDetail;
