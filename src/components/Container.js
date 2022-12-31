import React, { useEffect, useState } from "react";
import Card from "./Card";

function Container(props) {
  let data = [
    {
      id: 1,
      isClicked: false,
    },
    {
      id: 2,
      isClicked: false,
    },
    {
      id: 3,
      isClicked: false,
    },
    {
      id: 4,
      isClicked: false,
    },
    {
      id: 5,
      isClicked: false,
    },
    {
      id: 6,
      isClicked: false,
    },
    {
      id: 7,
      isClicked: false,
    },
    {
      id: 8,
      isClicked: false,
    },
    {
      id: 9,
      isClicked: false,
    },
    {
      id: 10,
      isClicked: false,
    },
    {
      id: 11,
      isClicked: false,
    },
    {
      id: 12,
      isClicked: false,
    },
  ];

  const [cards, setCards] = useState(data);

  const onClick = (c) => {
    console.log(c.isClicked);
    c.isClicked = true;
    console.log(c.isClicked);
    console.log("clicked");
  };

  const shuffleCards = (cards) => {
    for (let i = cards.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }
  };

  useEffect(() => {
    const cardsToShuffle = [...cards];
    shuffleCards(cardsToShuffle);
    setCards(cardsToShuffle);
  }, []);

  return (
    <div>
      Container:
      {cards.map((card) => (
        <Card i={card.id} onClick={() => onClick(card)} key={card.id} />
      ))}
    </div>
  );
}

export default Container;
