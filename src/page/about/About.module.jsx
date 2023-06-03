import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const AboutComponent = styled.div`
  width: auto;
  flex-direction: column;

  h1 {
    font-size: 50px;
    margin: 0;
  }

  h2 {
    font-size: 30px;
    text-align: right;
    margin: 0;
  }
`;

export const LinkSns = styled(Link)`
  text-decoration: none;
  color: black;
  height: 125px;
`;

export const IconWrapper = styled.div`
  text-align: right;
  margin-top: 5px;
`;
