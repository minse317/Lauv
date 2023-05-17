import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavbarContainer = styled.nav`
  font-family: 'Darumadrop One', cursive;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 30px; 
`;

export const NavbarList = styled.ul`
  list-style:none;
`

export const NavbarListItem = styled.li`
  text-decoration: none;
  float: left;
  font-size: 30px;
`

export const Title = styled(Link)`
  text-decoration: none;
  font-size: 55px;
  color: #003AB9;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  margin-right: 25px;
`