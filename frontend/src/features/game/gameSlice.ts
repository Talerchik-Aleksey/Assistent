import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Card {
  profession_name: string;
  category: number;
}

interface GameState {
  cards: Array<Card>;
  columns: Array<Array<string>>;
  badAnswers: Array<number>;
}

const initialState: GameState = {
  cards: [],
  columns: [[], [], [], [], []],
  badAnswers: [],
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setCards: (state, action: PayloadAction<Array<Card>>) => {
      state.cards = action.payload;
    },
    setBadAnswers: (state, action: PayloadAction<number>) => {
      state.badAnswers.push(action.payload);
    },
    clearAnswers: (state) => {
      state.badAnswers = [];
    },
    setAnswer: (
      state,
      action: PayloadAction<{ category: number; profession_name: string }>
    ) => {
      state.columns[action.payload.category].push(
        action.payload.profession_name
      );
    },
  },
});

export const { setCards, setAnswer, setBadAnswers, clearAnswers } =
  gameSlice.actions;
export const gameReducer = gameSlice.reducer;
