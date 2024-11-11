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
  handleSaveInputValue: (
    e: ChangeEvent<HTMLInputElement>,
    type: string
  ) => void;
  disabled: boolean;
  handleClickSignUpBtn: () => void;
  isError: boolean;
}
const Hobby = ({
  handleSaveInputValue,
  disabled = true,
  handleClickSignUpBtn,
  isError,
}: funnelProp) => {
  return (
    <>
      <div css={funnelWrapperStyle}>
        <h2 css={funnelTitleStyle}>취미</h2>
        <input
          name="hobby"
          css={funnelInputStyle(isError)}
          type="text"
          placeholder="취미를 입력해주세요."
          onChange={(e) => handleSaveInputValue(e, "HOBBY")}
        />
        {isError && <p css={errMsgStyle}>8글자 이내로 입력해주세요.</p>}
        <form action="">
          <Button
            type="button"
            disabled={disabled}
            onClick={() => handleClickSignUpBtn()}
          >
            회원가입
          </Button>
        </form>
      </div>
    </>
  );
};

export default Hobby;
