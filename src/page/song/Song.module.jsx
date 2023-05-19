import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const BoxContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;

`

export const Box = styled.div`
  width: 600px;
  height: 300px;
  border: .1px solid lightgray;
  border-radius: 15px;
  box-shadow: 5px 5px 5px lightgray;
  display : flex;
  align-items : center;
`  

export const Ig = styled.div `
  background-color: lightgray;
  width: 180px;
  height: 180px;
  margin: 15px;
`
export const LeftContainer = styled.div`
  flex-direction: column;
  display: flex;
  justify-content : center;
`

export const IconContainer = styled.div`
  margin: auto;
`
export const LeftIcon = styled(FontAwesomeIcon)`
  transform: scaleX(-1);
  margin-right: 15px;
`

export const CenterIcon = styled(FontAwesomeIcon)`
  margin-right: 15px;
  font-size: 20px;
`

export const RightIcon = styled(FontAwesomeIcon)`

`
