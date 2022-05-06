import { createSelector } from '@reduxjs/toolkit';

import { Code } from '../../../types/api-types';
import { codesState } from './state';

export const selectCodes = createSelector(
  (state: codesState) => state.codes,
  (codes: Record<number, Code>) => Object.values(codes),
);
