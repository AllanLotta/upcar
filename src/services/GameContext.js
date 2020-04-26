/* eslint-disable react/prop-types */

import React, { useState, createContext, useEffect } from 'react';

export const GameContext = createContext();

export default function GameProvider(props) {
  const { children } = props;

  const [playerPosition, setPlayerPosition] = useState('middle');
  const [playerName, setPlayerName] = useState('Lotta');
  const [playerCar, setPlayerCar] = useState(4);
  const [turbo, setTurbo] = useState(false);
  const [maxTurbo, setMaxTurbo] = useState(3);

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
      }}
    >
      {children}
    </GameContext.Provider>
  );
}
