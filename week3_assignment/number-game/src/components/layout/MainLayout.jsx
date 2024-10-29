/** @jsxImportSource @emotion/react */

import { mainLayoutStyle } from "./MainLayout.style";
import Header from "../Header/Header";
import { layoutStyle } from "./MainLayout.style";
import RankingBoard from "../RankingBoard/RankingBoard";
import { useState } from "react";

const MainLayout = () => {
  const [tab, setTab] = useState("게임");

  const handleSwitchTab = (btnTxt) => {
    setTab(btnTxt);
  };

  return (
    <div css={mainLayoutStyle}>
      <Header handleSwitchTab={handleSwitchTab} tab={tab}></Header>
      <div css={layoutStyle}>{tab === "랭킹" && <RankingBoard />}</div>
    </div>
  );
};

export default MainLayout;
