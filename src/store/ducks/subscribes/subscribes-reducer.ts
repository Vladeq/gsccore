import { createSlice } from '@reduxjs/toolkit';

import { initialState } from './state';

export const subscribesReducer = createSlice({
  name: 'subscribes',
  initialState,
  reducers: {
    setError(state, action) {
      state.isError = true;
      state.error = action.payload;
    },
    setLoading(state, action) {
      state.isLoading = action.payload;
    },
  },
});

export const { setError, setLoading } = subscribesReducer.actions;
