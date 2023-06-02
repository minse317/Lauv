import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

export const BoxContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

export const Box = styled.div`
  width: 650px;
  height: 300px;
  border-radius: 15px;
  box-shadow: 5px 5px 5px 5px lightgray;
  display: flex;
  align-items: center;
  margin: 50px;
  transition: transform 0.3s ease;

  text-decoration: none;
  h1 {
    font-size: 18px;
    color: #444444;
    margin-top: 0;
  }

  h2 {
    font-size: 22px;
  }

  &:hover {
    transform: scale(1.02);
  }
`;

export const Image = styled.img`
  width: 200px;
  height: 200px;
  margin: 15px;
`;

export const RightContainer = styled.div`
  flex-direction: column;
  display: flex;
  text-align: left;
`;

export const IconContainer = styled.div`
  margin-top: 80px;
  margin-left: 85px;
`;

export const LeftIcon = styled(FontAwesomeIcon)`
  transform: scaleX(-1);
  margin-right: 30px;
  font-size: 25px;
`;

export const CenterIcon = styled(FontAwesomeIcon)`
  margin-right: 30px;
  font-size: 30px;
`;

export const RightIcon = styled(FontAwesomeIcon)`
  font-size: 25px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  margin-right: 25px;
`;

export const TrackListMainContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const TrackListContainer = styled.div`
  width: 650px;
  -webkit-box-shadow: 5px 5px 50px 0px lightgray;
  -moz-box-shadow: 5px 5px 50px 0px lightgray;
  box-shadow: 5px 5px 50px 0px lightgray;
  border-radius: 10px;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 35px;
  }

  img {
    margin: 0;
    width: 450px;
    border-radius: 50%;
    box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.3);
    margin-bottom: 30px;
  }
`;

export const Music = styled.div`
  width: 640px;
  padding: 5px;
  border: 0.5px solid lightgray;
  box-shadow: 0 0 0 0.5px lightgray;

  &:last-child {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    border-bottom: none;
  }

  h3 {
    font-size: 18px;
    margin: 2px;
  }
  h4 {
    font-size: 16px;
    color: #2e2e2e;
    margin: 2px;
  }
`;
