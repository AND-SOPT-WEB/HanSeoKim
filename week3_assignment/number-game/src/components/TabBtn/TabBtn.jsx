/** @jsxImportSource @emotion/react */
import { TabBtnStyle } from "./TabBtn.style";

const TabBtn = ({ btnText, handleSwitchTab, tab }) => {
  const isActive = tab === btnText;

  return (
    <button
      css={TabBtnStyle(isActive)}
      onClick={() => handleSwitchTab(btnText)}
    >
      {btnText}
    </button>
  );
};

export default TabBtn;
