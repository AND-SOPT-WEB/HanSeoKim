import { css, keyframes } from "@emotion/react";

const clickAnimation = keyframes`
 0% {
    background-color: #00025C;
  }
  50% {
    background-color: #5f5e5e8a; /* 중간 색상 */
  }
  100% {
    background-color: #00025C;
  }
`;
export const cardStyle = (isReplaced, isClicked) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  width: 4rem;
  height: 4rem;
  background-color: ${isReplaced ? "#00025C" : "black"};
  ${isClicked &&
  css`
    animation: ${clickAnimation} 0.5s ease;
  `}
`;
