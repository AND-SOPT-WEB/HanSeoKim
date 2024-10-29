/** @jsxImportSource @emotion/react */
import { TabBtnStyle } from "./TabBtn.style";

const TabBtn = ({ btnText }) => {
  return <button css={TabBtnStyle}>{btnText}</button>;
};

export default TabBtn;
