/** @jsxImportSource @emotion/react */
import { headerStyle } from "./Header.style";
import TabBtn from "../TabBtn/TabBtn";
import { btnWrapper } from "./Header.style";
import DropdownLevel from "../DropdownLevel/DropdownLevel";

const Header = ({ handleSwitchTab, tab }) => {
  return (
    <header css={headerStyle}>
      <h1>1 to 50</h1>
      <div css={btnWrapper}>
        <div>
          <TabBtn
            btnText={"게임"}
            handleSwitchTab={handleSwitchTab}
            tab={tab}
          ></TabBtn>
          <TabBtn
            btnText={"랭킹"}
            handleSwitchTab={handleSwitchTab}
            tab={tab}
          ></TabBtn>
        </div>
        {tab === "게임" && (
          <div>
            <DropdownLevel></DropdownLevel>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
