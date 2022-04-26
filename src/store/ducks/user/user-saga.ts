import { PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import { SignInRequest, SignUpRequest } from '../../../api/requests';
import { SignInDto, SignUpDto } from '../../../types/api-types';
import { UserActionKinds } from './user-action-kinds';
import { addUser, setError, setLoading } from './user-reducer';

function* signUpWorker(action: PayloadAction<SignUpDto>) {
  yield put(setLoading(true));
  const { email, name, password } = action.payload;
  try {
    const responce: AxiosResponse = yield call(SignUpRequest, { email, name, password });
    if (!responce.data.token) {
      yield put(setError(responce.data.name));
    } else {
      yield put(addUser(responce.data));
    }
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
    if (!responce.data.token) {
      yield put(setError(responce.data.name));
    } else {
      yield put(addUser(responce.data));
    }
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
  ]);
}
