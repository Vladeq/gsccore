import { createSlice } from '@reduxjs/toolkit';

import { Product } from '../../../types/api-types';
import { initialState } from './state';

export const productsReducer = createSlice({
  name: 'products',
  initialState,
  reducers: {
    renderProducts(state, action) {
      state.isError = false;
      state.error = null;
      state.products = action.payload.reduce(
        (accum: Record<number, Product>, current: Product) => {
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

export const { renderProducts, setError, setLoading } = productsReducer.actions;
