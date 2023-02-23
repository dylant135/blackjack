import React, { useState } from 'react';
import './App.css';
import cards from './components/cards';
import Home from './components/Home';
import Game from './components/Game';

function App() {
  const [page, setPage] = useState('home')
  const [theCards, setTheCards] = useState(cards)
  const [playerCards, setPlayerCards] = useState()
  const [computerCards, setComputerCards] = useState()
  const [playerScore, setPlayerScore] = useState(0)
  const [computerScore, setComputerScore] = useState(0)

  function startGame() {
    let mix = theCards
    mix.sort(() => Math.random() - 0.5)
    setTheCards(mix)
    setPage('game')
    setPlayerCards(() => theCards.slice(0, 2))
    setComputerCards(() => theCards.slice(2, 4))
  }

    
  return (
    <div className="App">
      <h1>BlackJack</h1>
      {page === 'home' && <Home startGame={startGame} />}
      {page === 'game' && <Game
        theCards={theCards}
        playerCards={playerCards}
        setPlayerCards={setPlayerCards}
        computerCards={computerCards}
        setComputerCards={setComputerCards}
        playerScore={playerScore}
        computerScore={computerScore}
        setPlayerScore={setPlayerScore}
        setComputerScore={setComputerScore}
      />}
    </div>
  );
}

export default App;
