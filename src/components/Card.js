import React from "react";

function Card(props) {
  return (
    <div className="card" onClick={() => props.playGame(props.card)}>
      <img src={props.card.src} alt="{props.card.alt}" />
      <p>{props.card.alt}</p>
    </div>
  );
}

export default Card;
