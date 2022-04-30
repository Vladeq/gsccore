import { PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import {
  SignInRequest,
  SignUpRequest,
  UpdatePasswordRequest,
  UpdatePersonalDataRequest,
} from '../../../api/requests';
import {
  SignInDto,
  SignUpDto,
  UpdatePasswordDto,
  UpdatePersonalDataDto,
} from '../../../types/api-types';
import { UserActionKinds } from './user-action-kinds';
import { addUser, setError, setLoading, updateData } from './user-reducer';

function* signUpWorker(action: PayloadAction<SignUpDto>) {
  yield put(setLoading(true));
  const { email, username, password } = action.payload;
  try {
    const responce: AxiosResponse = yield call(SignUpRequest, {
      email,
      username,
      password,
    });
    yield put(addUser(responce.data));
  } catch (err) {
    if (err instanceof Error) {
      yield put(setError(err));
    }
  } finally {
    yield put(setLoading(false));
  }
}

function* signInWorker(action: PayloadAction<SignInDto>) {
  yield put(setLoading(true));
  const { email, password } = action.payload;
  try {
    const responce: AxiosResponse = yield call(SignInRequest, { email, password });
    yield put(addUser(responce.data));
  } catch (err) {
    if (err instanceof Error) {
      yield put(setError(err));
    }
  } finally {
    yield put(setLoading(false));
  }
}

function* updatePersonalDataWorker(action: PayloadAction<UpdatePersonalDataDto>) {
  yield put(setLoading(true));
  const { username, email } = action.payload;
  try {
    const responce: AxiosResponse = yield call(UpdatePersonalDataRequest, {
      username,
      email,
    });
    yield put(updateData(responce.data));
  } catch (err) {
    if (err instanceof Error) {
      yield put(setError(err));
    }
  } finally {
    yield put(setLoading(false));
  }
}

function* updatePasswordWorker(action: PayloadAction<UpdatePasswordDto>) {
  yield put(setLoading(true));
  const { currentPassword, newPassword } = action.payload;
  try {
    const responce: AxiosResponse = yield call(UpdatePasswordRequest, {
      currentPassword,
      newPassword,
    });
    console.log(responce.data);
  } catch (err) {
    if (err instanceof Error) {
      yield put(setError(err));
    }
  } finally {
    yield put(setLoading(false));
  }
}

export function* userWatcher() {
  yield all([
    takeLatest(UserActionKinds.signUp, signUpWorker),
    takeLatest(UserActionKinds.signIn, signInWorker),
    takeLatest(UserActionKinds.updatePersonalData, updatePersonalDataWorker),
    takeLatest(UserActionKinds.updatePassword, updatePasswordWorker),
  ]);
}
