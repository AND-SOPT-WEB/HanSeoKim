/** @jsxImportSource @emotion/react */
import { ChangeEvent, useRef, useState } from "react";
import {
  funnelTitleStyle,
  funnelInputStyle,
  funnelWrapperStyle,
  funnelButtonStyle,
} from "./funnelContents.style";

interface funnelProp {
  onClick: () => void;
}

const Name = ({ onClick }: funnelProp) => {
  const [inputValue, setInputValue] = useState("");
  const [disabled, setDisabled] = useState(true);
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setDisabled(e.target.value.length <= 0);
  };
  return (
    <>
      <div css={funnelWrapperStyle}>
        <h2 css={funnelTitleStyle}>이름</h2>
        <input
          css={funnelInputStyle}
          type="text"
          placeholder="사용자 이름을 입력해주세요."
          onChange={handleInputChange}
        />
        <button
          type="button"
          css={funnelButtonStyle}
          onClick={onClick}
          disabled={disabled}
        >
          다음
        </button>
      </div>
    </>
  );
};

export default Name;
