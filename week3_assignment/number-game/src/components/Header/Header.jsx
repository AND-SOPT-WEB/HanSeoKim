/** @jsxImportSource @emotion/react */
import { headerStyle } from "./Header.style";
import TabBtn from "../TabBtn/TabBtn";
import { css } from "@emotion/react";
import DropdownLevel from "../DropdownLevel/DropdownLevel";

const Header = () => {
  return (
    <header css={headerStyle}>
      <h1>1 to 50</h1>
      <div css={btnWrapper}>
        <div>
          <TabBtn btnText={"게임"}></TabBtn>
          <TabBtn btnText={"랭킹"}></TabBtn>
        </div>
        <div>
          <DropdownLevel></DropdownLevel>
        </div>
      </div>
    </header>
  );
};

const btnWrapper = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin-left: 2rem;
`;

export default Header;
