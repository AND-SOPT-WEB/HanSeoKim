/** @jsxImportSource @emotion/react */
import React from "react";

import { gameStyle, textStyle } from "./Game.style";
import { createPortal } from "react-dom";
import ModalContent from "../Modal/ModalContent";
import { LEVELS } from "../../constants/constants";
import useCardState from "../../hooks/useCardState";
import { getGameData, saveGameData } from "../../utils/saveData";
import { backdropStyle } from "../Modal/ModalContent.style";
import NumCard from "./NumCard";
import { useState, useEffect } from "react";

const Game = ({ level, startTimer, time, resetTimer, stopTimer }) => {
  const [showModal, setShowModal] = useState(false);
  const { cardState, initCardArray, handleClickCard } = useCardState(level);
  console.log("렌더링");

  const handleReset = () => {
    resetTimer();
    initCardArray();
    setShowModal(false);
  };

  useEffect(() => {
    initCardArray();
    setShowModal(false);
  }, [level]);

  useEffect(() => {
    if (cardState.nextNumber === 2) {
      startTimer();
    }
    if (
      cardState.clickedCards.length === cardState.cardArray.length &&
      cardState.cardArray.length !== 0
    ) {
      stopTimer();
      setShowModal(true);
      let userData = {
        currentTime: new Date(Date.now()).toLocaleString(),
        level: level,
        playTime: time,
      };
      const gameDatas = getGameData();
      saveGameData([...gameDatas, userData]);
    }
  }, [cardState.clickedCards, cardState.cardArray.length]);

  return (
    <>
      <div>
        <p css={textStyle}>다음 클릭할 숫자: {cardState.nextNumber}</p>
        <div css={gameStyle(LEVELS[level].levelGrid)}>
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
              <div key={index} style={{ display: "hidden" }}></div>
            )
          )}
        </div>
      </div>

      {showModal &&
        createPortal(
          <div css={backdropStyle}>
            <ModalContent
              onClose={() => setShowModal(false)}
              handleReset={handleReset}
            />
          </div>,
          document.body
        )}
    </>
  );
};

export default React.memo(Game);
