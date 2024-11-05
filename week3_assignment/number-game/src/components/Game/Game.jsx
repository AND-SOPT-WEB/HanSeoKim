/** @jsxImportSource @emotion/react */

import { gameStyle } from "./Game.style";

import NumCard from "./NumCard";

const Game = () => {
  return (
    <div css={gameStyle}>
      <NumCard></NumCard>
    </div>
  );
};

export default Game;
