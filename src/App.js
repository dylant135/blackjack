import React, { useState } from 'react';
import './App.css';
import cards from './components/cards';
import Home from './components/Home';
import Game from './Game';

function App() {
  const [page, setPage] = useState('home')
  let theCards = cards

  function startGame() {
    setPage('game')
    theCards.sort(() => Math.random() - 0.5)
  }
  
  return (
    <div className="App">
      <h1>BlackJack</h1>
      {page === 'home' && <Home startGame={startGame} />}
      {page === 'game' && <Game />}
    </div>
  );
}

export default App;
