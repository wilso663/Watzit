import React, { useState, useEffect } from 'react';
import Board from './components/board';
import initializeDeck from './deck';

function App() {
  const [cards, setCards] = useState([])
  const [flipped, setFlipped] = useState([])
  const [dimension, setDimension] = useState(400)
  const [solved, setSolved] = useState([])
  const [disabled, setDisabled] = useState(false)
  const [gameOver, setGameOver] = useState(false)

  useEffect(() => {
    resizeBoard()
    setCards(initializeDeck())
  }, [])

  useEffect(() => {
    const resizeListener = window.addEventListener('resize', resizeBoard)
    return () => window.removeEventListener('resize', resizeListener)
  })

  const resetDeck = () => {
    setCards([])
    setFlipped([])
    setSolved([])
    setDisabled(false)
    setCards(initializeDeck())
  }
  const handleClick = (id) => { 
    setDisabled(true)
    if(flipped.length === 0){
      setFlipped([id])
      setDisabled(false)
    } else {
      if(sameCardClicked(id)) return;
      setFlipped([flipped[0], id]);
      if(isMatch(id) && solved.length === 14){
        setSolved([...solved, flipped[0], id])
        resetCards()
        setGameOver(true)
        setTimeout(setGameOver(false), 1000)
        resetDeck()
      }
      else if(isMatch(id)){
        setSolved([...solved, flipped[0], id])
        resetCards()
      } else {
        setTimeout(resetCards, 1000)
      }
    }
  }

  const resetCards = () => {
    setFlipped([])
    setDisabled(false)
  }

  const isMatch = (id) => {
    const clickedCard = cards.find((card) => card.id === id)
    const flippedCard = cards.find((card) => flipped[0] === card.id)
    return flippedCard.type === clickedCard.type
  }

  const sameCardClicked = (id) => {
    flipped.includes(id)
  }

  const resizeBoard = () => {
      setDimension(Math.min(
      document.documentElement.clientWidth,
      document.documentElement.clientHeight,
      ),
    )
  }

  return (
    <div className="App">
      <h1>Memory</h1>
      <h2>Can you remember where the cards are?</h2>
      <Board 
        dimension={dimension}
        cards={cards}
        flipped={flipped}
        handleClick={handleClick}
        disabled={disabled}
        solved={solved}
      />
      <div>{gameOver ? <h4>You Win!</h4> : null}</div>
    </div>
  );
}

export default App;
