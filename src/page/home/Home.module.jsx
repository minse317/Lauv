import styled, { keyframes } from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
`;

export const LauvImg = styled.img`
  width: 900px;
  margin-left: auto;
  filter: drop-shadow(10px 5px 5px #343434);
  z-index: 2;
`;

export const WelcomeText = styled.h1`
  font-family: 'Lilita One', cursive;
  font-size: 150px;
  margin-left: 150px;
  line-height: 300px;
  color: #00194f;
  letter-spacing: 7px;
`;

export const motion = keyframes`
  100% { transform: rotate(360deg); }
`;

export const Box = styled.div`
  width: 750px;
  height: 750px;
  border-radius: 59% 41% 59% 41% / 35% 58% 42% 65%;
  background-color: #1f0049;
  position: absolute;
  right: 0;
  margin-right: 100px;
  margin-top: 50px;
  z-index: 1;
  animation: ${motion} 6s linear infinite;
  transform-origin: 50% 50%;
`;
