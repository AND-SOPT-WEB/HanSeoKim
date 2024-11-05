/** @jsxImportSource @emotion/react */

import { gameStyle } from "./Game.style";
import { shuffleCard } from "../../utils/shuffleCard";

import NumCard from "./NumCard";
import { useTimer } from "../../hooks/useTimer";
import { useState } from "react";

const Game1 = ({ level }) => {
  const [cardState, setCardState] = useState({
    cardArray: [],
    visibleCards: [],
    clickedCards: [],
  });
  let levelGrid;
  if (level === "1") {
    levelGrid = 3;
  } else if (level === "2") {
    levelGrid = 4;
  } else {
    levelGrid = 5;
  }

  const handleCardState = (arr) => {
    setCardState({
      cardArray: arr,
      visibleCards: shuffleCard(arr.slice(0, Math.floor(arr.length / 2))),
      clickedCards: [],
    });
  };

  const RenderGameBoard = () => {
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

    handleCardState(cardArray);
  };

  if (cardState.cardArray.length === 0) {
    RenderGameBoard();
  }

  const handleFirstCardClick = (card) => {
    if (!cardState.clickedCards.includes(card)) {
      const firstClickedCards = [...cardState.clickedCards, card];
      const remainCards = cardState.visibleCards.filter(
        (c) => !firstClickedCards.includes(c)
      );
      console.log("firstClick", firstClickedCards);
      console.log("remainCards", remainCards);

      const firstVisibleCards = [...remainCards];

      setCardState((prev) => ({
        ...prev,
        clickedCards: firstClickedCards,
        visibleCards: firstVisibleCards,
      }));
    }
  };

  return (
    <>
      <div css={gameStyle(levelGrid)}>
        {cardState.visibleCards.map((card) => (
          <NumCard
            key={card}
            number={card}
            onClick={() => handleFirstCardClick(card)}
          />
        ))}
      </div>
    </>
  );
};
