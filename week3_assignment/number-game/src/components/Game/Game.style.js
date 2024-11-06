import { css } from "@emotion/react";

export const gameStyle = (levelGrid) => css`
  display: grid;
  grid-template-columns: repeat(${levelGrid}, 1fr);
  grid-template-rows: repeat(${levelGrid}, 1fr);
  gap: 0.5rem;
  color: white;
`;

export const textStyle = () => css`
  color: white;
  font-size: 1rem;
  margin: 1rem;
  text-align: center;
`;
