import React, { useState } from "react";
import Container from "./Container";
import Header from "./Header";

function Game() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  return (
    <div>
      <Header score={score} bestScore={bestScore} />
      <Container />
    </div>
  );
}

export default Game;
