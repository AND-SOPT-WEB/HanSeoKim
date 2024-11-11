/** @jsxImportSource @emotion/react */
import { ChangeEvent } from "react";
import {
  funnelTitleStyle,
  funnelInputStyle,
  funnelWrapperStyle,
  errMsgStyle,
} from "./funnelContents.style";
import Button from "../common/Button/Button";

interface funnelProp {
  onClick: () => void;
  handleSaveInputValue: (
    e: ChangeEvent<HTMLInputElement>,
    type: string
  ) => void;
  disabled: boolean;
  isError: boolean;
  userInputs: UserInputs;
}

interface UserInputs {
  username: string;
  password: string;
  confirmPwd: string;
  hobby: string;
}

const Password = ({
  onClick,
  handleSaveInputValue,
  disabled = true,
  isError,
  userInputs,
}: funnelProp) => {
  return (
    <>
      <div css={funnelWrapperStyle}>
        <h2 css={funnelTitleStyle}>비밀번호</h2>
        <input
          css={funnelInputStyle(isError)}
          type="password"
          placeholder="비밀번호를 입력해주세요."
          onChange={(e) => handleSaveInputValue(e, "PASSWORD")}
        />

        <input
          onChange={(e) => handleSaveInputValue(e, "CONFIRM")}
          css={funnelInputStyle(isError)}
          type="password"
          placeholder="비밀번호 확인"
        />
        {isError && <p css={errMsgStyle}>8글자 이내로 입력해주세요.</p>}
        {disabled && userInputs.password.length > 0 && (
          <p css={errMsgStyle}>비밀번호가 일치하지 않습니다.</p>
        )}
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
