import React, { useState } from 'react';
import './App.css';
import cards from './components/cards';
import Home from './components/Home';
import Game from './components/Game';
import End from './components/End';

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

  function endGame() {
    setPage('end')
  }

    
  return (
    <div className="App">
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
        endGame={endGame}
      />}
      {page === 'end' && <End
        playerScore={playerScore}
        computerScore={computerScore}
      />}
    </div>
  );
}

export default App;
