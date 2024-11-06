import { useState } from "react";
import { shuffleCard } from "../utils/shuffleCard";
import { LEVELS } from "../constants/constants";

const useCardState = (level = 1) => {
  const [cardState, setCardState] = useState({
    cardArray: [],
    visibleCards: [],
    clickedCards: [],
    replaceCard: [],
    nextNumber: 1,
  });

  const initCardArray = () => {
    const cardArray = Array.from(
      { length: LEVELS[level].cardNumber },
      (_, index) => index + 1
    );

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

  const handleClickCard = (card) => {
    if (card === cardState.nextNumber) {
      const secondClick = [...cardState.clickedCards, card];
      const remainCard = cardState.replaceCard;

      const newVisibleCards = [...cardState.visibleCards];

      newVisibleCards.forEach((c, index) => {
        if (c === card) {
          if (remainCard.length > 0) {
            newVisibleCards[index] = remainCard.shift();
          } else {
            newVisibleCards[index] = null;
          }
        }
      });
      setCardState((prev) => ({
        ...prev,
        visibleCards: newVisibleCards,
        clickedCards: secondClick,
        nextNumber: prev.nextNumber + 1,
        replaceCard: remainCard,
      }));
    }
  };
  return { cardState, initCardArray, handleClickCard };
};

export default useCardState;
