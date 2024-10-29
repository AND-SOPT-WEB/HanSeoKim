/** @jsxImportSource @emotion/react */

import { mainLayoutStyle } from "./MainLayout.style";
import Header from "../Header/Header";
import { css } from "@emotion/react";
import RankingBoard from "../RankingBoard/RankingBoard";

const MainLayout = () => {
  return (
    <div css={mainLayoutStyle}>
      <Header></Header>
      <div css={layoutStyle}>
        <RankingBoard></RankingBoard>
      </div>
    </div>
  );
};

export default MainLayout;

const layoutStyle = css`
  display: flex;
  justify-content: center;
`;
