/** @jsxImportSource @emotion/react */

import { gameStyle } from "./Game.style";

import NumCard from "./NumCard";
import { useTimer } from "../../hooks/useTimer";

const Game = () => {
  const { startTimer, resetTimer } = useTimer();
  return (
    <div css={gameStyle}>
      <NumCard></NumCard>
    </div>
  );
};

export default Game;
