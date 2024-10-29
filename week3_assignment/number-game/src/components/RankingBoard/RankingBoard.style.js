import { css } from "@emotion/react";

export const RankingBoardStyle = css`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 35rem;
  height: 20rem;
  margin: 2rem;
  padding: 1rem;
  border: 3px;
  font-family: "GalmuriMono7";
  font-size: 0.8rem;
  border-radius: 10px;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  background-color: white;

  & table thead {
    background-color: #182562;
    color: white;
  }

  & th {
    padding: 0.4rem;
  }
`;
