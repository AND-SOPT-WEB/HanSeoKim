/** @jsxImportSource @emotion/react */
import { ChangeEvent } from "react";
import {
  funnelTitleStyle,
  funnelInputStyle,
  funnelWrapperStyle,
} from "./funnelContents.style";
import Button from "../common/Button/Button";

interface funnelProp {
  onClick: () => void;
  handleSaveInputValue: (
    e: ChangeEvent<HTMLInputElement>,
    type: string
  ) => void;
  disabled: boolean;
}

const Password = ({
  onClick,
  handleSaveInputValue,
  disabled = true,
}: funnelProp) => {
  return (
    <>
      <div css={funnelWrapperStyle}>
        <h2 css={funnelTitleStyle}>비밀번호</h2>
        <input
          css={funnelInputStyle}
          type="password"
          placeholder="비밀번호를 입력해주세요."
          onChange={(e) => handleSaveInputValue(e, "PASSWORD")}
        />
        <input
          onChange={(e) => handleSaveInputValue(e, "CONFIRM")}
          css={funnelInputStyle}
          type="password"
          placeholder="비밀번호 확인"
        />

        <form action="">
          <Button type="button" disabled={disabled} onClick={onClick}>
            다음
          </Button>
        </form>
      </div>
    </>
  );
};

export default Password;
