import { createSlice } from '@reduxjs/toolkit';

import { initialState } from './state';

export const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser(state, action) {
      state.id = action.payload.user.id;
      state.email = action.payload.user.email;
      state.username = action.payload.user.username;
      state.token = action.payload.token;
      state.isAuth = true;
      state.isError = false;
      state.error = null;
    },
    signOut(state) {
      state.id = 0;
      state.email = '';
      state.username = '';
      state.token = '';
      state.isAuth = false;
      state.isError = false;
      state.error = null;
      state.isLoading = false;
    },
    updateData(state, action) {
      state.username = action.payload.username;
      state.email = action.payload.password;
    },
    setError(state, action) {
      state.isError = true;
      state.isAuth = false;
      state.error = action.payload;
    },
    setLoading(state, action) {
      state.isLoading = action.payload;
    },
  },
});
export const { addUser, signOut, setError, setLoading, updateData } = userReducer.actions;
