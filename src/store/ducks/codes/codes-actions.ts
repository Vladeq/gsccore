import { createAction } from '@reduxjs/toolkit';

import { CodesActionKinds } from './codes-action-kinds';

export const getCodes = createAction(CodesActionKinds.getCodes);
