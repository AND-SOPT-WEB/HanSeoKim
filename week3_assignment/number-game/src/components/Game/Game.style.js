import { css } from "@emotion/react";

export const gameStyle = (levelGrid) => css`
  display: grid;
  grid-template-columns: repeat(${levelGrid}, 1fr);
  grid-template-rows: repeat(${levelGrid}, 1fr);
  gap: 0.5rem;
  color: white;
`;
