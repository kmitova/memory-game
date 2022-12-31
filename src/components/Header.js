import React from "react";

function Header(props) {
  return (
    <div>
      <h1>Memory Game</h1>
      Current score: {props.score}
      Best score: {props.bestScore}
    </div>
  );
}

export default Header;
