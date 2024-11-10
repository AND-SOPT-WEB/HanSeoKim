/** @jsxImportSource @emotion/react */
import { ChangeEvent, useState } from "react";
import {
  funnelTitleStyle,
  funnelInputStyle,
  funnelWrapperStyle,
  funnelButtonStyle,
} from "./funnelContents.style";

const Hobby = () => {
  const [inputValue, setInputValue] = useState("");
  const [disabled, setDisabled] = useState(true);
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setDisabled(e.target.value.length <= 0);
  };
  return (
    <>
      <div css={funnelWrapperStyle}>
        <h2 css={funnelTitleStyle}>취미</h2>
        <input
          css={funnelInputStyle}
          type="text"
          placeholder="취미를 입력해주세요."
          onChange={handleInputChange}
        />
        <button type="button" css={funnelButtonStyle} disabled={disabled}>
          회원가입
        </button>
      </div>
    </>
  );
};

export default Hobby;
