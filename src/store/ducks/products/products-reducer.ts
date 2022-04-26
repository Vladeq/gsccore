import { createSlice } from '@reduxjs/toolkit';

import { Product } from '../../../types/api-types';
import { initialState } from './state';

export const productsReducer = createSlice({
  name: 'products',
  initialState,
  reducers: {
    renderProducts(state, action) {
      state.products = action.payload.reduce(
        (accum: Record<number, Product>, current: Product) => {
          accum[current.id] = current;
          return accum;
        },
        {},
      );
    },
  },
});

export const { renderProducts } = productsReducer.actions;
