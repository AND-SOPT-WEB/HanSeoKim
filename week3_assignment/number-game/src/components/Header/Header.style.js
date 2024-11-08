import { css } from "@emotion/react";

export const headerStyle = css`
  display: flex;
  padding: 2rem;
  margin-bottom: 4rem;
  height: 5rem;
  align-items: center;
  background-color: black;
  color: white;
  font-size: 0.8rem;

  & div {
    display: flex;
  }

  & h1 {
    display: flex;
    width: 8rem;
  }
`;

export const btnWrapper = css`
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-left: 2rem;
`;

export const timeStyle = css`
  margin-left: 2rem;
  align-self: center;
  font-size: 1.5rem;
`;
