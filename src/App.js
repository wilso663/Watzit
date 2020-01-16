import React, { useState, useEffect} from 'react';
import Board from './components/board';
import initializeDeck from './deck';
import './index.css';

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

    if(flipped.length === 0){ //If no card are flipped, 
      setFlipped([id])
      setDisabled(false)
    } else {
      if(sameCardClicked(id)){
        setDisabled(false);
        return;
      }
      setFlipped([flipped[0], id]);
      if(isMatch(id) && solved.length === 14){
        setGameOver(true)
        setSolved([...solved, flipped[0], id])
        setTimeout(function() {
          resetDeck()
          resetGameOver()
        }, 3000)
      }
      else if(isMatch(id)){
        setSolved([...solved, flipped[0], id])
        resetCards()
      } else {
        setTimeout(resetCards, 800)
      }
    }
  }

  const resetCards = () => {
    setFlipped([])
    setDisabled(false)
  }

  const resetGameOver = () => {
    setGameOver(false)
  }
  const isMatch = (id) => {
    const clickedCard = cards.find((card) => card.id === id)
    const flippedCard = cards.find((card) => flipped[0] === card.id)
    return flippedCard.type === clickedCard.type && flippedCard.id !== clickedCard.id
  }

  const sameCardClicked = (id) => {
    return flipped.includes(id)
  }

  const resizeBoard = () => {
      setDimension(Math.min(
      document.documentElement.clientWidth,
      document.documentElement.clientHeight * .8, //restrict board height to 80% of the browser to prevent scrollbar
      ),
    )
  }



  return (
    <div className="App">
      <h3>Watzit?</h3>
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
