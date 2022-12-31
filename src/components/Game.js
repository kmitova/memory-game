import React, { useState } from "react";
import Container from "./Container";
import Header from "./Header";

function Game() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [cards, setCards] = useState([]);

  const increaseScore = () => {
    setScore((prevScore) => prevScore + 1);
  };

  const handleCard = (card) => {
    setCards((prevCards) => [...prevCards, card]);
  };

  const handleBestScore = () => {
    if (score > bestScore) {
      setBestScore(score);
    }
  };

  const restartGame = () => {
    setScore(0);
    setCards([]);
  };

  const playGame = (c) => {
    if (cards.includes(c)) {
      handleBestScore();
      restartGame();
    } else {
      handleCard(c);
      increaseScore();
    }
  };

  return (
    <div>
      <Header score={score} bestScore={bestScore} />
      <Container score={score} bestScore={bestScore} playGame={playGame} />
    </div>
  );
}

export default Game;
