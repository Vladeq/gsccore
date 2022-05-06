import { createSelector } from '@reduxjs/toolkit';

import { Subscribe } from '../../../types/api-types';
import { subscribesState } from './state';

export const selectSubscribes = createSelector(
  (state: subscribesState) => state.subscribes,
  (subscribes: Record<number, Subscribe>) => Object.values(subscribes),
);
