import styled from 'styled-components';
// import Cenary from '../../assets/img/cenary.gif';

export const Container = styled.div.attrs(() => {})`
  width: 100%;
  height: 100%;
  background: url(${(props) => props.cenary}) no-repeat;
  background-size: contain;
`;

export const CarPositionSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100px;
`;
export const CarPosition = styled.div`
  width: 150px;
  height: 150px;
`;

export const Car = styled.img.attrs((props) => ({
  src: props.car,
}))`
  width: 100px;
  height: 100px;
  transition: 0.5s;
  margin-left: ${(props) => props.direction}px;
  opacity: 0.8;
`;
