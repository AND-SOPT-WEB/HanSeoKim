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
}

const Name = ({
  onClick,
  handleSaveInputValue,
  disabled,
  isError,
}: funnelProp) => {
  return (
    <>
      <div css={funnelWrapperStyle}>
        <h2 css={funnelTitleStyle}>이름</h2>
        <input
          css={funnelInputStyle(isError)}
          type="text"
          placeholder="사용자 이름을 입력해주세요."
          onChange={(e) => handleSaveInputValue(e, "ID")}
        />
        {isError && <p css={errMsgStyle}>8글자 이내로 입력해주세요.</p>}
        <Button type="button" onClick={onClick} disabled={disabled}>
          다음
        </Button>
      </div>
    </>
  );
};

export default Name;
