/** @jsxImportSource @emotion/react */

import { mainLayoutStyle } from "./MainLayout.style";
import Header from "../Header/Header";

const MainLayout = () => {
  return (
    <div css={mainLayoutStyle}>
      <Header></Header>
    </div>
  );
};

export default MainLayout;
