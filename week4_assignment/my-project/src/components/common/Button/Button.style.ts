import { css } from "@emotion/react";
import { Theme } from "../../../styles/theme";

export const buttonStyle = css`
  width: 100%;
  padding: 0.7rem 1rem;
  margin-bottom: 0.5rem;
  color: ${Theme.color.white};
  background-color: ${Theme.color.lightGray_1};
  border: 0px solid;
  border-radius: 5px;
  cursor: pointer;
  :hover {
    background-color: ${Theme.color.lightGray_3};
    transition: all 1s;
  }
  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
    opacity: 0.5;
  }
`;
