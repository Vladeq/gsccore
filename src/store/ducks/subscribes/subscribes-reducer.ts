import { createSlice } from '@reduxjs/toolkit';

import { Subscribe } from '../../../types/api-types';
import { initialState } from './state';

export const subscribesReducer = createSlice({
  name: 'subscribes',
  initialState,
  reducers: {
    renderSubscribes(state, action) {
      state.isError = false;
      state.error = null;
      state.subscribes = action.payload.reduce(
        (accum: Record<number, Subscribe>, current: Subscribe) => {
          accum[current.id] = current;
          return accum;
        },
        {},
      );
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

export const { setError, setLoading, renderSubscribes } = subscribesReducer.actions;
