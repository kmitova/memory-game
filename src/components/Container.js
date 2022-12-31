import React, { useEffect, useState } from "react";
import Card from "./Card";
import data from "../assets/data";

function Container(props) {
  let images = data;

  const [newCards, setNewCards] = useState(images);

  const shuffleCards = (cardsToShuffle) => {
    for (let i = cardsToShuffle.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [cardsToShuffle[i], cardsToShuffle[j]] = [
        cardsToShuffle[j],
        cardsToShuffle[i],
      ];
    }
  };

  useEffect(() => {
    const cardsToShuffle = [...newCards];
    shuffleCards(cardsToShuffle);
    setNewCards(cardsToShuffle);
  }, [props.score, props.bestScore]);

  return (
    <div className="cards-container">
      {newCards.map((card) => (
        <Card card={card} key={card.id} playGame={props.playGame} />
      ))}
    </div>
  );
}

export default Container;
