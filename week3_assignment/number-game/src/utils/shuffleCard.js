export const shuffleCard = (arr) => {
  const shuffledCard = [...arr];
  for (let i = shuffledCard.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledCard[i], shuffledCard[j]] = [shuffledCard[j], shuffledCard[i]];
  }
  return shuffledCard;
};
