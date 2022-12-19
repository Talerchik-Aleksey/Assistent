import { createSlice } from "@reduxjs/toolkit";

interface Question {
  id: number;
  question_text: string;
  answer_id: number;
}

interface TestState {
  allQuestions: Array<Question>;
  displayMessage: Array<Question>;
  currentQuestion: number;
  lastQuestionNumber: number;
}

const initialState: TestState = {
  allQuestions: [{ id: 0, question_text: "", answer_id: 0 }],
  displayMessage: [],
  currentQuestion: 0,
  lastQuestionNumber: 0,
};

export const testSlice = createSlice({
  name: "user",
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
  },
});

export const { setAllQuestion, setAddNewMessage, setNewMessage } =
  testSlice.actions;
export const testReducer = testSlice.reducer;
