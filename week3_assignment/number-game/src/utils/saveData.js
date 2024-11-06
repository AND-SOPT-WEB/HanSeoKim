export const getGameData = () => {
  const gameData = localStorage.getItem("gameDatas");
  return gameData ? JSON.parse(gameData) : [];
};

export const saveGameData = (data) => {
  localStorage.setItem("gameDatas", JSON.stringify(data));
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
