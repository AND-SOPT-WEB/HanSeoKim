/** @jsxImportSource @emotion/react */

import { gameStyle } from "./Game.style";
import { shuffleCard } from "../../utils/shuffleCard";

import NumCard from "./NumCard";
import { useTimer } from "../../hooks/useTimer";
import { useState } from "react";

const Game = ({ level }) => {
  const [cardState, setCardState] = useState({
    cardArray: [],
    visibleCards: [],
    clickedCards: [],
  });

  const handleInitialCardArray = (cardArray) => {
    setCardState(cardArray);
  };

  const renderGameBoard = () => {
    let cardArray = [];
    switch (level) {
      case "1":
        cardArray = Array.from({ length: 18 }, (_, index) => index + 1);

        break;
      case "2":
        cardArray = Array.from({ length: 32 }, (_, index) => index + 1);

        break;
      case "3":
        cardArray = Array.from({ length: 50 }, (_, index) => index + 1);

        break;
    }

    const shuffledCards = shuffleCard(cardArray);
    let levelGrid;

    if (level === "1") {
      levelGrid = 3;
    } else if (level === "2") {
      levelGrid = 4;
    } else {
      levelGrid = 5;
    }

    return (
      <div css={gameStyle(levelGrid)}>
        {shuffledCards.map((card) => (
          <NumCard key={card} number={card} />
        ))}
      </div>
    );
  };
  return <>{renderGameBoard()}</>;
};

export default Game;
