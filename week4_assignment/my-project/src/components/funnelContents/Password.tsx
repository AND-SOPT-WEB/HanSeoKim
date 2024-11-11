/** @jsxImportSource @emotion/react */
import { ChangeEvent } from "react";
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

import {
  funnelTitleStyle,
  funnelInputStyle,
  funnelWrapperStyle,
  errMsgStyle,
  visibleBtn,
} from "./funnelContents.style";
import Button from "../common/Button/Button";

interface funnelProp {
  onClick: () => void;
  handleSaveInputValue: (e: ChangeEvent<HTMLInputElement>) => void;
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
  const [hide, setHide] = useState(true);
  const onToggleHide = () => {
    setHide((prev) => !prev);
  };
  return (
    <>
      <div css={funnelWrapperStyle}>
        <h2 css={funnelTitleStyle}>비밀번호</h2>

        <div style={{ position: "relative", width: "100%" }}>
          <input
            name="password"
            css={funnelInputStyle(isError)}
            type={hide ? "password" : "text"}
            placeholder="비밀번호를 입력해주세요."
            onChange={(e) => handleSaveInputValue(e)}
          />
          {hide ? (
            <div css={visibleBtn}>
              <AiFillEyeInvisible onClick={() => onToggleHide()} />
            </div>
          ) : (
            <div css={visibleBtn}>
              <AiFillEye onClick={() => onToggleHide()} />
            </div>
          )}
        </div>

        <input
          name="confirmPwd"
          onChange={(e) => handleSaveInputValue(e)}
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
