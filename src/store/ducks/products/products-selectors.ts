import { createSelector } from '@reduxjs/toolkit';

import { Product } from '../../../types/api-types';
import { productsState } from './state';

export const selectProduct = createSelector(
  (state: productsState) => state.products,
  (products: Record<number, Product>) => Object.values(products),
);
