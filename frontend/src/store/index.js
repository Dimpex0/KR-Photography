import { createSlice, configureStore } from "@reduxjs/toolkit";

const authInitialState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: authInitialState,
  reducers: {
    authenticate(state, action) {
      state.isAuthenticated = action.payload;
    },
  },
});

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    // add other slices
  },
});

export const authActions = authSlice.actions;
export default store;
