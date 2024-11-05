/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

const NumCard = ({ number, onClick, isReplaced }) => {
  return (
    <div css={cardStyle(isReplaced)} onClick={onClick}>
      {number}
    </div>
  );
};

export default NumCard;

const cardStyle = (isReplaced) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  width: 4rem;
  height: 4rem;
  background-color: ${isReplaced ? "#00025C" : "black"};
`;
