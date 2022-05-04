import { createAction } from '@reduxjs/toolkit';

import { BuySubscribeDto } from '../../../types/api-types';
import { SubscribesActionKinds } from './subscribes-action-kinds';

export const getSubscribesAct = createAction(SubscribesActionKinds.getSubscribes);
export const buySubscribeAct = createAction<BuySubscribeDto>(
  SubscribesActionKinds.buySubscribe,
);
