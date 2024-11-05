/** @jsxImportSource @emotion/react */

import { mainLayoutStyle } from "./MainLayout.style";
import Header from "../Header/Header";
import { layoutStyle } from "./MainLayout.style";
import RankingBoard from "../RankingBoard/RankingBoard";
import { useState } from "react";
import { shuffleCard } from "../../utils/shuffleCard";
import { gameStyle } from "../Game/Game.style";
import NumCard from "../Game/NumCard";
const MainLayout = () => {
  const [tab, setTab] = useState("게임");
  const [level, setLevel] = useState("1");
  const [cardState, setCardState] = useState({
    cardArray: [],
    visibleCards: [],
    firstClickedCards: [],
    secondClickedCards: [],
  });

  const handleLevel = (level) => {
    setLevel(level);
  };

  const handleSwitchTab = (btnTxt) => {
    setTab(btnTxt);
  };

  return (
    <div css={mainLayoutStyle}>
      <Header
        handleSwitchTab={handleSwitchTab}
        tab={tab}
        handleLevel={handleLevel}
      ></Header>
      <div css={layoutStyle}>
        {tab === "랭킹" ? <RankingBoard /> : <Game level={level}></Game>}
      </div>
    </div>
  );
};

const Game = ({ level }) => {
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
        (c) => !cardState.clickedCards.includes(c)
      );
      console.log("firstClick", firstClickedCards);
      console.log("remainCards", remainCards);

      const visibleCards = [...remainCards];

      setCardState((prev) => ({
        ...prev,
        clickedCards: firstClickedCards,
        visibleCards: visibleCards,
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

export default MainLayout;
