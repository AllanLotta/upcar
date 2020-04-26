import React from 'react';
import styled, { keyframes, css } from 'styled-components';

export const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 2px solid pink;
  width: 600px;
  height: 600px;
  margin: 0 auto;
  vertical-align: center;
`;

const left = keyframes`
  0% {
    width: 20px;
    transform: translate(-20px, 0);
  }

  100% {
    width: 80px;
    height: 80px;
    transform: translate(-200px, 200px);
  }
`;
const middle = keyframes`
  0% {
    width: 20px;
    transform: translate(0, 0);
  }

  100% {
    width: 80px;
    height: 80px;
    transform: translate(0, 200px);
  }
`;

const right = keyframes`
  0% {
    width: 20px;
    transform: translate(-20px, 0);
  }

  100% {
    width: 80px;
    height: 80px;
    transform: translate(200px, 200px);
  }
`;

export const BoombLeft = styled.div`
  width: 20px;
  height: 20px;
  background-color: red;
  border-radius: 50%;
  animation-name: ${left};
  animation-duration: ${(props) => props.velocity}ms;
  animation-timing-function: linear;
`;

export const BoombMiddle = styled.div`
  width: 20px;
  height: 20px;
  background-color: red;
  border-radius: 50%;
  animation-name: ${middle};
  animation-duration: ${(props) => props.velocity}ms;
  animation-timing-function: linear;
`;

export const BoombRight = styled.div`
  width: 20px;
  height: 20px;
  background-color: red;
  border-radius: 50%;
  animation-name: ${right};
  animation-duration: ${(props) => props.velocity}ms;
  animation-timing-function: linear;
`;
