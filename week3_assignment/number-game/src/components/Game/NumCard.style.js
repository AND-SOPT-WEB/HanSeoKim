import { css } from "@emotion/react";

export const cardStyle = (isReplaced) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  width: 4rem;
  height: 4rem;
  background-color: ${isReplaced ? "#00025C" : "black"};
  &:active {
    background-color: #5f5e5e8a;
  }
`;
