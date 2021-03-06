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
        <Main>
          <GameProvider>
            <Routes />
          </GameProvider>
        </Main>
      </Container>
    </>
  );
}

export default App;
