/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

const NumCard = () => {
  return <div css={cardStyle}>d</div>;
};

export default NumCard;

const cardStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  width: 4rem;
  height: 4rem;
  background-color: black;
`;
