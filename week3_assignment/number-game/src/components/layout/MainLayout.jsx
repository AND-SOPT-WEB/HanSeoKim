/** @jsxImportSource @emotion/react */

import { mainLayoutStyle } from "./MainLayout.style";
import Header from "../Header/Header";
import { layoutStyle } from "./MainLayout.style";
import RankingBoard from "../RankingBoard/RankingBoard";
import { useState, useEffect } from "react";
import Game from "../Game/Game";
import { useTimer } from "../../hooks/useTimer";

const MainLayout = () => {
  const [tab, setTab] = useState("게임");
  const [level, setLevel] = useState("1");
  const { time, startTimer, resetTimer, stopTimer } = useTimer();

  const handleLevel = (level) => {
    setLevel(level);
  };

  const handleSwitchTab = (btnTxt) => {
    setTab(btnTxt);
  };
  useEffect(() => {
    resetTimer();
  }, [level, tab]);
  return (
    <div css={mainLayoutStyle}>
      <Header
        handleSwitchTab={handleSwitchTab}
        tab={tab}
        handleLevel={handleLevel}
        time={time}
      ></Header>
      <div css={layoutStyle}>
        {tab === "랭킹" ? (
          <RankingBoard />
        ) : (
          <Game
            level={level}
            startTimer={startTimer}
            resetTimer={resetTimer}
            stopTimer={stopTimer}
            time={time}
          ></Game>
        )}
      </div>
    </div>
  );
};

export default MainLayout;
