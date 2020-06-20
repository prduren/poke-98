import React from 'react';
import Routes from './Routes';
import fetchPokemon from './store/fetchPokemon';

function App() {
  fetchPokemon();

  return <div className="App">{Routes}</div>;
}

export default App;
