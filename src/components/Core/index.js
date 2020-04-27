/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
/* eslint-disable default-case */
import React, { useState, useEffect, useContext } from 'react';
import { GameContext } from '../../services/GameContext';

import Cenary from '../../assets/img/cenary.gif';
import CenaryTurbo from '../../assets/img/cenaryTurbo.gif';
import CenaryStop from '../../assets/img/cenaryStop.gif';

import Hud from '../Hud';
import { Container, CarPositionSection, Car } from './styles';

import BlueCar from '../../assets/img/car.png';
import OrangeCar from '../../assets/img/orangeCar.png';
import yellowCar from '../../assets/img/yellowCar.png';
import greenCar from '../../assets/img/greenCar.png';

export default function Core() {
  // const [position, setPosition] = useState();
  const {
    playerPosition,
    setPlayerPosition,
    playerCar,
    turbo,
    setTurbo,
    startGame,
    setStartGame,
    turboCount,
    setTurboCount,
    maxTurbo,
    pause,
    setPause,
  } = useContext(GameContext);

  useEffect(() => {
    document.onkeydown = (event) => {
      event = event || window.event;
      const keycode = event.keyCode;

      switch (keycode) {
        // T = Turbo
        case 84:
          if (!turbo) {
            if (turboCount !== maxTurbo) {
              setTurbo(true);
              setTurboCount(turboCount + 1);
              setTimeout(() => {
                setTurbo(false);
              }, 4000);
            }
          }
          console.log('TURBO');
          break;
        case 80:
          // R = Retry
          setPause(!pause);
          setStartGame(!startGame);
          console.log('PAUSE');
          break;
        // P = Pause

        // Direction right
        case 39:
        case 68:
          setPlayerPosition('right');
          break;
        // Direction middle
        case 37:
        case 65:
          setPlayerPosition('left');
          break;
        // Direction left
        case 83:
        case 38:
        case 40:
          setPlayerPosition('middle');
          break;
      }
    };
  });

  function loadDirection() {
    switch (playerPosition) {
      case 'right':
        return '430';
      case 'middle':
        return '240';
      case 'left':
        return '40';
      default:
        return '240';
    }
  }
  function loadCar() {
    switch (playerCar) {
      case 1:
        return BlueCar;
      case 2:
        return yellowCar;
      case 3:
        return greenCar;
      default:
        return OrangeCar;
    }
  }
  function loadCenary() {
    if (startGame) {
      if (turbo) {
        return CenaryTurbo;
      }
      return Cenary;
    }
    return CenaryStop;
  }

  return (
    <>
      <Container cenary={loadCenary()}>
        <Hud />
        <CarPositionSection>
          <Car car={loadCar()} direction={loadDirection()} />
        </CarPositionSection>
      </Container>
    </>
  );
}
