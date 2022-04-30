import { createAction } from '@reduxjs/toolkit';

import { SubscribesActionKinds } from './subscribes-action-kinds';

export const getSubscribesAct = createAction(SubscribesActionKinds.getSubscribes);
