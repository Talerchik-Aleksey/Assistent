export const isHumanNatureAnswer = (answer: string): boolean => {
  const keywords = ["спорт", "руки", "готовка", "рецепты"];
  return keywords.some((keyword) => answer.toLowerCase().includes(keyword));
};

export const isManTechnologyAnswer = (answer: string): boolean => {
  const keywords = [
    "учение",
    "анализ",
    "проблемы",
    "решение",
    "команда",
    "планы",
    "сроки",
  ];
  return keywords.some((keyword) => answer.toLowerCase().includes(keyword));
};

export const isManManAnswer = (answer: string): boolean => {
  const keywords = ["головоломки", "помощь", "люди", "общение", "контакт"];
  return keywords.some((keyword) => answer.toLowerCase().includes(keyword));
};

export const isManArtisticImageAnswer = (answer: string): boolean => {
  const keywords = ["музыка", "танец", "кино", "фильмы", "учение", "силы"];
  return keywords.some((keyword) => answer.toLowerCase().includes(keyword));
};

export const isManSignAnswer = (answer: string): boolean => {
  const keywords = [
    "спорт",
    "бег",
    "фитнес",
    "чтение",
    "путешествие",
    "места",
    "культуры",
    "традиции",
    "игры",
  ];
  return keywords.some((keyword) => answer.toLowerCase().includes(keyword));
};
