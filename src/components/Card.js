import React from "react";

function Card(props) {
  return (
    <div onClick={() => props.playGame(props.card)}>
      <img src="" alt="" />
      <p>{props.card.id}</p>
    </div>
  );
}

export default Card;
