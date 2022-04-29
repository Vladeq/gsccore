import { createSelector } from '@reduxjs/toolkit';

import { Product } from '../types/api-types';
import { productsState } from './ducks/products/state';
import { RootState } from './index';

export const selectProduct = createSelector(
  (state: productsState) => state.products,
  (products: Record<number, Product>) => Object.values(products),
);
export const selectToken = (state: RootState) => state.user.token;
