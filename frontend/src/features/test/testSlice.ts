import { createSlice } from "@reduxjs/toolkit";

interface Question {
  id: number;
  question_text: string;
  answers: Answer[];
}

interface Answer {
  id: number;
  question_id: number;
  answers: string;
}

type ScoredAnswer = {
  questionId: number;
  answer: string;
  score: number;
};

interface TestState {
  allQuestions: Array<Question>;
  displayMessage: Array<Question>;
  currentQuestion: number;
  lastQuestionNumber: number;
  scoredAnswers: Array<ScoredAnswer>;
}

const initialState: TestState = {
  allQuestions: [
    {
      id: 0,
      question_text: "",
      answers: [{ id: 0, question_id: -1, answers: "" }],
    },
  ],
  displayMessage: [],
  currentQuestion: 0,
  lastQuestionNumber: 0,
  scoredAnswers: [],
};

export const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    setAllQuestion: (state, action) => {
      state.allQuestions = [];
      state.allQuestions = action.payload;
      state.displayMessage = [];
      state.displayMessage.push(action.payload[0]);
      state.currentQuestion = 1;
      state.lastQuestionNumber = state.allQuestions.length;
    },
    setAddNewMessage: (state, action) => {
      state.displayMessage.push(action.payload);
    },
    setNewMessage: (state) => {
      const newQuestionID = state.currentQuestion + 1;
      if (state.lastQuestionNumber < newQuestionID) {
        return;
      }
      state.currentQuestion = newQuestionID;
      state.displayMessage.push(state.allQuestions[newQuestionID - 1]);
    },
    setAnswer: (state, action) => {
      state.scoredAnswers.push(action.payload);
    },
  },
});

export const { setAllQuestion, setAddNewMessage, setNewMessage, setAnswer } =
  testSlice.actions;
export const testReducer = testSlice.reducer;
