import { createSlice } from '@reduxjs/toolkit';

import { Code } from '../../../types/api-types';
import { initialState } from './state';

export const codesReducer = createSlice({
  name: 'codes',
  initialState,
  reducers: {
    renderCodes(state, action) {
      state.isError = false;
      state.error = null;
      state.codes = action.payload.reduce(
        (accum: Record<number, Code>, current: Code) => {
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

export const { renderCodes, setError, setLoading } = codesReducer.actions;
