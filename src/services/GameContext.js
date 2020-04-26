/* eslint-disable react/prop-types */

import React, { useState, createContext, useEffect } from 'react';

export const GameContext = createContext();

export default function GameProvider(props) {
  const { children } = props;

  const [playerPosition, setPlayerPosition] = useState('middle');
  const [playerName, setPlayerName] = useState('');
  const [playerCar, setPlayerCar] = useState(1);
  const [turbo, setTurbo] = useState(false);
  const [turboCount, setTurboCount] = useState(0);
  const [maxTurbo, setMaxTurbo] = useState(3);
  const [startGame, setStartGame] = useState(false);
  const [collisions, setCollisions] = useState(0);

  useEffect(() => {}, []);

  return (
    <GameContext.Provider
      value={{
        playerPosition,
        setPlayerPosition,
        playerName,
        setPlayerName,
        playerCar,
        setPlayerCar,
        turbo,
        setTurbo,
        maxTurbo,
        setMaxTurbo,
        startGame,
        setStartGame,
        collisions,
        setCollisions,
        turboCount,
        setTurboCount,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}
