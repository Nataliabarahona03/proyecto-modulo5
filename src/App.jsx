import React from 'react';
import ErrorBoundary from './components/ErrorBoundary';

const App = () => {
  return (
    <ErrorBoundary>
      <div>
        <h1>Aplicacion de FIFAS</h1>
        <p>Conoce a los jugadoresjugadores de fútbol.</p>
      </div>
    </ErrorBoundary>
  );
};

export default App;
