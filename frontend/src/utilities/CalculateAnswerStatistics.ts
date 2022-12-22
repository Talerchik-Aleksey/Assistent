type ScoredAnswer = {
  questionId: number;
  answer: string;
  score: number;
};

type AnswerStatistics = {
  humanNatureScore: number;
  manTechnologyScore: number;
  manManScore: number;
  manArtisticImageScore: number;
  manSignScore: number;
};

export const CalculateAnswerStatistics = (
  scoredAnswers: ScoredAnswer[]
): AnswerStatistics => {
  const scores: AnswerStatistics = {
    humanNatureScore: 0,
    manTechnologyScore: 0,
    manManScore: 0,
    manArtisticImageScore: 0,
    manSignScore: 0,
  };
  scoredAnswers.forEach((scoredAnswer) => {
    switch (scoredAnswer.score) {
      case 1:
        scores.humanNatureScore += 1;
        break;
      case 2:
        scores.manTechnologyScore += 1;
        break;
      case 3:
        scores.manManScore += 1;
        break;
      case 4:
        scores.manArtisticImageScore += 1;
        break;
      case 5:
        scores.manSignScore += 1;
        break;
      default:
        break;
    }
  });
  return scores;
};
