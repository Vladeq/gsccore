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
      state.isError = false;
      state.error = null;
    },
    signOut(state) {
      state.id = 0;
      state.email = '';
      state.username = '';
      state.token = '';
      state.isError = false;
      state.error = null;
      state.isLoading = false;
    },
    setError(state, action) {
      state.isError = true;
      state.error = action.payload;
    },
    setLoading(state, action) {
      state.isLoading = action.payload;
    },
  },
});
export const { addUser, signOut, setError, setLoading } = userReducer.actions;
