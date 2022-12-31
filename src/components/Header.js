import React from "react";

function Header(props) {
  return (
    <div>
      <h1>Memory Game</h1>
      <h2>Don't click on any image more than once!</h2>
      <div className="scores">
        <h3>Current score: {props.score}</h3>
        <h3>Best score: {props.bestScore}</h3>
      </div>
    </div>
  );
}

export default Header;
