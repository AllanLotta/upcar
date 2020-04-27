import React, { useContext, useState, useCallback } from 'react';
import { GameContext } from '../../services/GameContext';

import { Container, BoombLeft, BoombMiddle, BoombRight } from './styles';

function Obstacles() {
  const [position, setPosition] = useState('left');
  const [count, setCount] = useState(0);
  const {
    playerPosition,
    turbo,
    startGame,
    setStartGame,
    collisions,
    setCollisions,
    score,
    setScore,
  } = useContext(GameContext);

  const checkCollision = useCallback(() => {
    if (playerPosition === position) {
      setScore(score - 3);
      setCollisions(collisions + 1);
      return console.log('KABUMM!!!!!!!!!');
    }
    return setScore(score + 7);
  }, [position, playerPosition]);

  const renderBoomb = useCallback(() => {
    if (position === 'left') {
      return (
        <BoombLeft
          velocity={turbo ? 500 : 1200}
          onAnimationEndCapture={() => {
            setPosition('middle');
            checkCollision();
          }}
        />
      );
    }
    if (position === 'middle') {
      return (
        <BoombMiddle
          velocity={turbo ? 500 : 1200}
          onAnimationEndCapture={() => {
            setPosition('right');
            checkCollision();
          }}
        />
      );
    }
    if (position === 'right') {
      return (
        <BoombRight
          velocity={turbo ? 500 : 1200}
          onAnimationEndCapture={() => {
            setPosition('left');
            checkCollision();
          }}
        />
      );
    }
  }, [position, playerPosition]);

  return <Container>{startGame && renderBoomb()}</Container>;
}

export default Obstacles;
