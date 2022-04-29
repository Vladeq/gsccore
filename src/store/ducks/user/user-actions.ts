import { createAction } from '@reduxjs/toolkit';

import {
  SignInDto,
  SignUpDto,
  UpdatePasswordDto,
  UpdatePersonalDataDto,
} from '../../../types/api-types';
import { UserActionKinds } from './user-action-kinds';

export const signInAct = createAction<SignInDto>(UserActionKinds.signIn);
export const signUpAct = createAction<SignUpDto>(UserActionKinds.signUp);
export const updatePersonalDataAct = createAction<UpdatePersonalDataDto>(
  UserActionKinds.updatePersonalData,
);
export const updatePasswordAct = createAction<UpdatePasswordDto>(
  UserActionKinds.updatePassword,
);
