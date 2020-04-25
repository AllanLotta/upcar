import React from 'react';
import Global from './style/global';
import Routes from './routes';
import { Container, Main } from './style/app';
import GameProvider from './services/GameContext';

function App() {
  return (
    <>
      <Global />
      <Container>
        <GameProvider>
          <Main>
            <Routes />
          </Main>
        </GameProvider>
      </Container>
    </>
  );
}

export default App;
