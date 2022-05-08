import { createAction } from '@reduxjs/toolkit';

import { ActivateCodeDto, ManageCodesDto,  } from '../../../types/api-types';
import { CodesActionKinds } from './codes-action-kinds';

export const getCodesAct = createAction(CodesActionKinds.getCodes);
export const activateCodeAct = createAction<ActivateCodeDto>(
  CodesActionKinds.activateCode,
);
export const manageCodesAct = createAction<ManageCodesDto>(CodesActionKinds.manageCodes);
