import React, {
  useEffect,
  useContext,
  useState,
  memo,
  useCallback,
} from 'react';
import { GameContext } from '../../services/GameContext';

import { Container, BoombLeft, BoombMiddle, BoombRight } from './styles';

function Obstacles() {
  const [position, setPosition] = useState('left');
  const { playerPosition, turbo, startGame } = useContext(GameContext);

  const checkCollision = useCallback(() => {
    if (playerPosition === position) {
      return console.log('KABUMM!!!!!!!!!');
    }
    return console.log('jogou muito');
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
