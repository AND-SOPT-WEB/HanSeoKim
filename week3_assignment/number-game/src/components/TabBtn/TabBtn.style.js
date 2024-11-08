import { css } from "@emotion/react";

export const TabBtnStyle = (isActive) => css`
  margin-left: 1rem;
  padding: 0.5rem 1rem;
  border: 0px;
  border-radius: 7px;
  font-family: "GalmuriMono7";
  cursor: pointer;
  background-color: ${isActive ? "#111b46" : "white"};
  color: ${isActive ? "white" : "black"};
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  &:hover {
    background-color: #111b46;
    color: white;
  }
`;
