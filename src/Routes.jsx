import {   Route,  Routes as RouteList } from 'react-router-dom';
import Home from './page/home/Home';
import About from './page/about/About';
import Song from './page/song/Song';

const Routes = () => {
  return (
    <RouteList>
      <Route exact path='/' component={<Home />} />
      <Route exact path='/about' component={<About />} />
      <Route exact path='/song' component={<Song />} />
    </RouteList>
  )
}

export default Routes;
