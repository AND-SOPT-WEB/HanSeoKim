/** @jsxImportSource @emotion/react */
import { RankingBoardStyle } from "./RankingBoard.style";
import { boardTopStyle } from "./RankingBoard.style";

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
