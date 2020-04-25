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

const down = keyframes`
  0% {
    width: 20px;
    transform: translate(-20px, 0);
  }

  100% {
    width: 80px;
    height: 80px;
    transform: translate(-300px, 350px);
  }
`;

export const Boomb = styled.div`
  width: 20px;
  height: 20px;
  background-color: red;
  border-radius: 50%;
  animation-name: ${down};
  animation-duration: 2000ms;
  animation-timing-function: linear;
`;
