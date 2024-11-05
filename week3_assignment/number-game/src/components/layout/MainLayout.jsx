/** @jsxImportSource @emotion/react */

import { mainLayoutStyle } from "./MainLayout.style";
import Header from "../Header/Header";
import { layoutStyle } from "./MainLayout.style";
import RankingBoard from "../RankingBoard/RankingBoard";
import { useState } from "react";
import Game from "../Game/Game";

const MainLayout = () => {
  const [tab, setTab] = useState("게임");
  const [level, setLevel] = useState("1");

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
        {tab === "랭킹" ? <RankingBoard /> : <Game></Game>}
      </div>
    </div>
  );
};

export default MainLayout;
