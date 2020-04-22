import React from 'react';
import Global from './style/global';
import Routes from './routes';
import { Container, Main } from './style/app';

function App() {
  return (
    <>
      <Global />
      <Container>
        <Main>
          <Routes />
        </Main>
      </Container>
    </>
  );
}

export default App;
