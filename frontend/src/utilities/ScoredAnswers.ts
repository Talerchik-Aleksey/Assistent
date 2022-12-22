import {
  isHumanNatureAnswer,
  isManTechnologyAnswer,
  isManManAnswer,
  isManArtisticImageAnswer,
  isManSignAnswer,
} from "./catagoryHelperFunction";

type Answer = {
  questionId: number;
  answer: string;
};

type ScoredAnswer = {
  questionId: number;
  answer: string;
  score: number;
};

export default (answer: Answer): ScoredAnswer => {
  let score = 0;
  if (isHumanNatureAnswer(answer.answer)) {
    score = 1;
  } else if (isManTechnologyAnswer(answer.answer)) {
    score = 2;
  } else if (isManManAnswer(answer.answer)) {
    score = 3;
  } else if (isManArtisticImageAnswer(answer.answer)) {
    score = 4;
  } else if (isManSignAnswer(answer.answer)) {
    score = 5;
  }
  return {
    questionId: answer.questionId,
    answer: answer.answer,
    score,
  };
};
