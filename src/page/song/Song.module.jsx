import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const BoxContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

export const Box = styled.div`
  width: 650px;
  height: 300px;
  border: 0.1px solid lightgray;
  border-radius: 15px;
  box-shadow: 5px 5px 5px lightgray;
  display: flex;
  align-items: center;
  margin: 50px;

  h1 {
    font-size: 20px;
  }
`;

export const Ig = styled.img`
  width: 200px;
  height: 200px;
  margin: 15px;
`;
export const LeftContainer = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: center;
`;

export const IconContainer = styled.div`
  margin: auto;
  margin-top: 10px;
`;

export const LeftIcon = styled(FontAwesomeIcon)`
  transform: scaleX(-1);
  margin-right: 15px;
  font-size: 20px;
`;

export const CenterIcon = styled(FontAwesomeIcon)`
  margin-right: 15px;
  font-size: 25px;
`;

export const RightIcon = styled(FontAwesomeIcon)`
  font-size: 20px;
`;
