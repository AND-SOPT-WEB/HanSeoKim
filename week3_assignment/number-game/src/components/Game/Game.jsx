/** @jsxImportSource @emotion/react */

import { gameStyle } from "./Game.style";
import { shuffleCard } from "../../utils/shuffleCard";

import NumCard from "./NumCard";
import { useState, useEffect } from "react";

const Game = ({ level, startTimer, resetTimer, stopTimer }) => {
  const [cardState, setCardState] = useState({
    cardArray: [],
    visibleCards: [],
    clickedCards: [],
    replaceCard: [],
    nextNumber: 1,
  });

  let levelGrid;
  if (level === "1") {
    levelGrid = 3;
  } else if (level === "2") {
    levelGrid = 4;
  } else {
    levelGrid = 5;
  }

  useEffect(() => {
    const initCardArray = () => {
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

      setCardState({
        cardArray: cardArray,
        visibleCards: shuffleCard(
          cardArray.slice(0, Math.floor(cardArray.length / 2))
        ),
        clickedCards: [],
        nextNumber: 1,
        replaceCard: shuffleCard(cardArray.slice(cardArray.length / 2)),
      });
    };

    initCardArray();
    resetTimer();
  }, [level]);

  const handleClickCard = (card) => {
    if (card === cardState.nextNumber) {
      if (cardState.nextNumber === 1) {
        startTimer();
      }
      const secondClick = [...cardState.clickedCards, card];
      const remainCard = cardState.replaceCard;

      const newVisibleCards = cardState.visibleCards.map((c) =>
        c === card ? (remainCard.length > 0 ? remainCard.shift() : null) : c
      );

      setCardState((prev) => ({
        ...prev,
        visibleCards: newVisibleCards,
        clickedCards: secondClick,
        nextNumber: prev.nextNumber + 1,
        replaceCard: remainCard,
      }));
    }
  };
  if (cardState.clickedCards.length === cardState.cardArray.length) {
    stopTimer();
  }

  return (
    <>
      <p>다음 클릭할 숫자: {cardState.nextNumber}</p>
      <div css={gameStyle(levelGrid)}>
        {cardState.visibleCards.map((card, index) =>
          card !== null ? (
            <NumCard
              key={index}
              number={card}
              onClick={() => handleClickCard(card)}
              isReplaced={
                !cardState.cardArray
                  .slice(0, Math.floor(cardState.cardArray.length / 2))
                  .includes(card)
              }
            />
          ) : (
            <div key={index} style={{ visibility: "hidden" }}></div>
          )
        )}
      </div>
      {cardState.clickedCards.length === cardState.cardArray.length && (
        <div>게임 종료!</div>
      )}
    </>
  );
};

export default Game;
