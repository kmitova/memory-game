import React from "react";

function Card(props) {
  return (
    <div onClick={props.onClick}>
      <img src="" alt="" />
      <p>{props.i}</p>
    </div>
  );
}

export default Card;
