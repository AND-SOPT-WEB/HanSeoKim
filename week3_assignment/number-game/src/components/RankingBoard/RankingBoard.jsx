/** @jsxImportSource @emotion/react */
import { RankingBoardStyle } from "./RankingBoard.style";
import { boardTopStyle } from "./RankingBoard.style";

const RankingBoard = () => {
  const rankingDatas = JSON.parse(localStorage.getItem("gameDatas")) || [];
  const sortedDatas = rankingDatas.sort((a, b) => {
    if (b.level !== a.level) {
      return b.level - a.level;
    }
    return Number(a.playTime) - Number(b.playTime);
  });

  const resetRanking = () => {
    localStorage.removeItem("gameDatas");
  };

  return (
    <div css={RankingBoardStyle}>
      <div css={boardTopStyle}>
        <h1>랭킹</h1>
        <button onClick={() => resetRanking()}>초기화</button>
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
          {sortedDatas?.map((rank) => {
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
