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

const categoriesInitialState = {
  categories: [],
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState: categoriesInitialState,
  reducers: {
    setCategories(state, action) {
      state.categories = action.payload;
    },
  },
});

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    categories: categoriesSlice.reducer,
    // add other slices
  },
});

export const authActions = authSlice.actions;
export const categoriesAction = categoriesSlice.actions;
export default store;
