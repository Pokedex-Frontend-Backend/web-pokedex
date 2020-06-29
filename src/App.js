import React from 'react';
import logo from './pokedex.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>
          Welcome to Pokedex
        </h1>
        <p>
          Pokemons catalog
        </p>
        <img src={logo} className="App-logo" alt="logo" />
       
       
      </header>
    </div>
  );
}

export default App;
