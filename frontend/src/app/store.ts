import { configureStore } from "@reduxjs/toolkit";
import { gameReducer } from "../features/game/gameSlice";
import { testReducer } from "../features/test/testSlice";
import { userReducer } from "../features/user/userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    game: gameReducer,
    test: testReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
