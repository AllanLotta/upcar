import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'react-lottie';
import timer from '../../resources/animations/timer.json';
import fire from '../../resources/animations/fire.json';
import { Container } from './styles';
import { GameContext } from '../../services/GameContext';

export default function Hud() {
  const {
    playerName,
    startGame,
    setStartGame,
    collisions,
    turboCount,
    maxTurbo,
    turbo,
    score,
    pause,
    setPause,
  } = useContext(GameContext);

  const eventListeners = [
    {
      eventName: 'complete',
      callback: () => {
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
      {!startGame && !pause ? (
        <div className="timer">
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
        </div>
      ) : null}
      <div className="leftSection">
        <div className="item">Batidas: {collisions}</div>
        <div className="item">T = Turbo</div>
        <div className="item">
          Turbo: {turboCount} / {maxTurbo}
        </div>
        <div>
          {turbo && (
            <Lottie
              eventListeners={eventListeners}
              options={{
                loop: true,
                autoplay: true,
                animationData: fire,
                rendererSettings: {
                  preserveAspectRatio: 'xMidYMid slice',
                },
              }}
              width={100}
              height={100}
            />
          )}
        </div>
      </div>
      <div className="rightSection">
        <div className="item">Score: {score}</div>
        <div className="item">P = Pause</div>
        {pause && <div className="item">Pausado!</div>}
      </div>
    </Container>
  );
}
