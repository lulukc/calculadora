import React from 'react';

import GlobalStyles from './styles/global';

import Calculator from '~/pages/Calculator';

function App() {
  return (
    <>
      <GlobalStyles />
      <h1>Calculadora</h1>
      <Calculator />
    </>
  );
}

export default App;
