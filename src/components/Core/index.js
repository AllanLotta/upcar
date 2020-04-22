/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
/* eslint-disable default-case */
import React, { useState, useEffect } from 'react';
import Hud from '../Hud';
import { Container, CarPositionSection, Car } from './styles';

export default function Core() {
  const [position, setPosition] = useState();

  useEffect(() => {
    document.onkeydown = (event) => {
      event = event || window.event;
      const keycode = event.keyCode;

      switch (keycode) {
        // T = Turbo
        case 84:
          console.log('TURBO');
          break;
        case 80:
          // R = Retry
          console.log('RETRY');
          break;
        // P = Pause
        case 82:
          console.log('PAUSE');
          break;
        // Direction right
        case 39:
        case 68:
          setPosition('right');
          break;
        // Direction middle
        case 37:
        case 65:
          setPosition('left');
          break;
        // Direction left
        case 83:
        case 38:
        case 40:
          setPosition('middle');
          break;
      }
    };
  });

  function loadDirection() {
    switch (position) {
      case 'right':
        return '430';
      case 'middle':
        return '240';

      case 'left':
        return '40';
      default:
        return '222';
    }
  }

  return (
    <>
      <Container>
        <Hud />
        <CarPositionSection>
          <Car direction={loadDirection()} />
        </CarPositionSection>
      </Container>
    </>
  );
}
