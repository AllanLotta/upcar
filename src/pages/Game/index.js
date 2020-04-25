import React from 'react';
import CoreGame from '../../components/Core';
import Obstacles from '../../components/Obstacles';

// import { Container } from './styles';

export default function game() {
  return (
    <>
      <Obstacles />
      <CoreGame />
    </>
  );
}
