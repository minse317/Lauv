import * as S from './NavBar.module';

const NavBar = () => {
  return (
    <S.NavbarContainer>
      <S.Title to="/">Lauv</S.Title>
      <S.NavbarList>
        <S.NavbarListItem>
          <S.StyledLink to="/about">About</S.StyledLink>
        </S.NavbarListItem>
        <S.NavbarListItem>
          <S.StyledLink to="/song">Song</S.StyledLink>
        </S.NavbarListItem>
      </S.NavbarList>
    </S.NavbarContainer>
  );
};

export default NavBar;
