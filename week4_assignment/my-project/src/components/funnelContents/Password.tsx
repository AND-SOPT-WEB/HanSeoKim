/** @jsxImportSource @emotion/react */
import { ChangeEvent, useState } from "react";
import {
  funnelTitleStyle,
  funnelInputStyle,
  funnelWrapperStyle,
} from "./funnelContents.style";
import Button from "../common/Button/Button";

interface funnelProp {
  onClick: () => void;
}

const Password = ({ onClick }: funnelProp) => {
  const [inputValue, setInputValue] = useState("");
  const [disabled, setDisabled] = useState(true);
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setDisabled(e.target.value.length <= 0);
  };
  return (
    <>
      <div css={funnelWrapperStyle}>
        <h2 css={funnelTitleStyle}>비밀번호</h2>
        <input
          css={funnelInputStyle}
          type="password"
          placeholder="비밀번호를 입력해주세요."
        />
        <input
          onChange={handleInputChange}
          css={funnelInputStyle}
          type="password"
          placeholder="비밀번호 확인"
        />

        <Button type="button" disabled={disabled} onClick={onClick}>
          다음
        </Button>
      </div>
    </>
  );
};

export default Password;
