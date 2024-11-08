/** @jsxImportSource @emotion/react */

import { useState } from "react";
import { cardStyle } from "./NumCard.style";
const NumCard = ({ number, isReplaced, onClick }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleCardClick = () => {
    onClick();
    setIsClicked(true);
  };

  return (
    <div
      css={cardStyle(isReplaced, isClicked)}
      onClick={() => {
        handleCardClick();
      }}
    >
      {number}
    </div>
  );
};

export default NumCard;
