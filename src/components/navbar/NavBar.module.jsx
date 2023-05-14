import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 30px 20px;
`;

export const NavbarList = styled.ul`
  list-style:none;
`

export const NavbarListItem = styled.li`
  text-decoration: none;
  float: left;
  font-size: 20px;
`

export const Img = styled.img`
  width: 100px;
  height: 100px;
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  margin-right: 25px;
`