/** @jsxImportSource @emotion/react */
import { RankingBoardStyle } from "./RankingBoard.style";
import { css } from "@emotion/react";

const RankingBoard = () => {
  return (
    <div css={RankingBoardStyle}>
      <div css={boardTopStyle}>
        <h1>랭킹</h1>
        <button>초기화</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>타임 스탬프</th>
            <th>레벨</th>
            <th>플레이 시간</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
};

export default RankingBoard;

const boardTopStyle = css`
  display: flex;
  margin-bottom: 1.5rem;
  & h1 {
    width: 90%;
  }

  & button {
    width: 10%;
    border: 2px solid;
    border-radius: 7px;
    font-family: "GalmuriMono7";
    cursor: pointer;
    background-color: white;
    color: black;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }
`;
