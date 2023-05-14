import { Link } from 'react-router-dom';
import logo from '../logo.png';
import * as S from './NavBar.module';

const NavBar = () => {
  return (
    <S.NavbarContainer>
    <Link to="/">
      <S.Img src={logo} alt="Logo" />
    </Link>
    <S.NavbarList>
      <S.NavbarListItem>
        <S.StyledLink to="/about">About</S.StyledLink>
      </S.NavbarListItem>
      <S.NavbarListItem>
        <S.StyledLink to="/song">Song</S.StyledLink>
      </S.NavbarListItem>
    </S.NavbarList>
  </S.NavbarContainer>
  )
}

export default NavBar