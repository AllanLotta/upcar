import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'react-lottie';
import timer from '../../resources/animations/timer.json';
import { Container } from './styles';
import { GameContext } from '../../services/GameContext';

export default function Hud() {
  const { playerName, startGame, setStartGame } = useContext(GameContext);
  const eventListeners = [
    {
      eventName: 'complete',
      callback: () => {
        console.log('the animation completed:');
        setStartGame(true);
      },
    },
  ];
  return (
    <Container>
      <div className="header">
        <Link to="/">
          <button type="button" className="goBack">
            Menu
          </button>
        </Link>
        <div className="playerName">{playerName}</div>
      </div>
      <div className="timer">
        {!startGame && (
          <Lottie
            eventListeners={eventListeners}
            options={{
              loop: false,
              autoplay: true,
              animationData: timer,
              rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice',
              },
            }}
            width={200}
            height={200}
          />
        )}
      </div>
    </Container>
  );
}
