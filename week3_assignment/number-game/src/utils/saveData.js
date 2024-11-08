export const getGameData = () => {
  const gameData = localStorage.getItem("gameDatas");
  return gameData ? JSON.parse(gameData) : [];
};

export const saveGameData = (level, time) => {
  let userData = {
    currentTime: new Date(Date.now()).toLocaleString(),
    level: level,
    playTime: time,
  };
  const gameDatas = getGameData();
  localStorage.setItem("gameDatas", JSON.stringify([...gameDatas, userData]));
};

export const sortGameData = (data) => {
  const sortedDatas = data.sort((a, b) => {
    if (b.level !== a.level) {
      return b.level - a.level;
    }
    return Number(a.playTime) - Number(b.playTime);
  });

  return sortedDatas;
};

export const removeGameData = () => {
  localStorage.removeItem("gameDatas");
};
