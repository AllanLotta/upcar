import styled from 'styled-components';
import Cenary from '../../assets/img/cenary.gif';
import CarImage from '../../assets/img/car.png';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: url(${Cenary}) no-repeat;
  background-size: contain;
`;

export const CarPositionSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid black;
  height: 100px;
`;
export const CarPosition = styled.div`
  width: 150px;
  height: 150px;
  border: 1px solid black;
`;

export const Car = styled.img.attrs({
  src: CarImage,
})`
  width: 100px;
  height: 100px;
  transition: 0.5s;
  margin-left: ${(props) => props.direction}px;
`;
