import { configureStore } from "@reduxjs/toolkit";
import { testReducer } from "../features/test/testSlice";
import { userReducer } from "../features/user/userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    test: testReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
