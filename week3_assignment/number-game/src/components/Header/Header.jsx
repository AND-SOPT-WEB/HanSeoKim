/** @jsxImportSource @emotion/react */
import { headerStyle } from "./Header.style";
import TabBtn from "../TabBtn/TabBtn";
import { btnWrapper } from "./Header.style";
import DropdownLevel from "../DropdownLevel/DropdownLevel";
import { useTimer } from "../../hooks/useTimer";
import { timeStyle } from "./Header.style";

const Header = ({ handleSwitchTab, tab, handleLevel }) => {
  const { time } = useTimer();
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
            <DropdownLevel handleLevel={handleLevel}></DropdownLevel>
            <p css={timeStyle}>{time}</p>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
