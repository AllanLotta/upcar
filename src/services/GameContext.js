/* eslint-disable react/prop-types */

import React, { useState, createContext, useEffect } from 'react';

export const GameContext = createContext();

export default function GameProvider(props) {
  const { children } = props;

  const [playerPosition, setPlayerPosition] = useState('middle');

  useEffect(() => {}, []);

  return (
    <GameContext.Provider value={{ playerPosition, setPlayerPosition }}>
      {children}
    </GameContext.Provider>
  );
}
