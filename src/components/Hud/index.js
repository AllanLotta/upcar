import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';
import { GameContext } from '../../services/GameContext';

export default function Hud() {
  const { playerName } = useContext(GameContext);
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
    </Container>
  );
}
