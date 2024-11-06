/** @jsxImportSource @emotion/react */
import { RankingBoardStyle } from "./RankingBoard.style";
import { boardTopStyle } from "./RankingBoard.style";
import {
  getGameData,
  sortGameData,
  removeGameData,
} from "../../utils/saveData";
import { useState } from "react";

const RankingBoard = () => {
  const [rankData, setRankData] = useState(sortGameData(getGameData()));
  const handleReset = () => {
    removeGameData();
    setRankData(getGameData());
  };

  return (
    <div css={RankingBoardStyle}>
      <div css={boardTopStyle}>
        <h1>랭킹</h1>
        <button onClick={() => handleReset()}>초기화</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>타임 스탬프</th>
            <th>레벨</th>
            <th>플레이 시간</th>
          </tr>
        </thead>
        <tbody>
          {rankData?.map((rank) => {
            return (
              <tr key={rank.currentTime}>
                <td>{rank.currentTime}</td>
                <td>{rank.level}</td>
                <td>{rank.playTime}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default RankingBoard;
