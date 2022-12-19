import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  auth: boolean;
  country: string;
  password: string;
  fullName: string;
  email: string;
  phone: string;
  image: string;
}

const initialState: UserState = {
  auth: false,
  country: "",
  password: "",
  fullName: "",
  email: "",
  phone: "",
  image: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      if (!action.payload) {
        state.auth = false;
        state.country = "";
        state.password = "";
        state.fullName = "";
        state.email = "";
        state.phone = "";
        state.image = "";
        return;
      }

      state.auth = true;
    },
    setCountry: (state, action) => {
      state.country = action.payload;
    },

    setPassword: (state, action) => {
      state.password = action.payload;
    },

    setFullName: (state, action) => {
      state.fullName = action.payload;
    },

    setEmail: (state, action) => {
      state.email = action.payload;
    },

    setPhone: (state, action) => {
      state.phone = action.payload;
    },

    setImage: (state, action) => {
      state.image = action.payload;
    },
  },
});

export const {
  setCountry,
  setPassword,
  setFullName,
  setEmail,
  setPhone,
  setImage,
  setAuth,
} = userSlice.actions;
export const userReducer = userSlice.reducer;
