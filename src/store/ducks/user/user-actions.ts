import { createAction } from '@reduxjs/toolkit';

import { SignInDto, SignUpDto } from '../../../types/api-types';
import { UserActionKinds } from './user-action-kinds';

export const signInAct = createAction<SignInDto>(UserActionKinds.signIn);
export const signUpAct = createAction<SignUpDto>(UserActionKinds.signUp);
