import { Route, Routes as RouteList } from 'react-router-dom';
import Home from './page/home/Home';
import About from './page/about/About';
import Song from './page/song/Song';
import SongDetail from './page/song/SongDetail';

const Routes = () => {
  return (
    <RouteList>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/song" element={<Song />} />
      <Route exact path="/song/detail/:albumId" element={<SongDetail />} />
    </RouteList>
  );
};

export default Routes;
