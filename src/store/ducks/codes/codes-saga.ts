import { PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import {
  ActivateCodeRequest,
  getCodesRequest,
  ManageCodesRequest,
} from '../../../api/requests';
import { ActivateCodeDto, ManageCodesDto } from '../../../types/api-types';
import { CodesActionKinds } from './codes-action-kinds';
import { activateCode, renderCodes, setError, setLoading } from './codes-reducer';

function* getCodesWorker() {
  yield put(setLoading(true));
  try {
    const responce: AxiosResponse = yield call(getCodesRequest);
    yield put(renderCodes(responce.data));
  } catch (err) {
    if (err instanceof Error) {
      yield put(setError(err));
    }
  } finally {
    yield put(setLoading(false));
  }
}

function* activateCodeWorker(action: PayloadAction<ActivateCodeDto>) {
  const { code } = action.payload;
  yield put(setLoading(true));
  try {
    const responce: AxiosResponse = yield call(ActivateCodeRequest, { code });
    yield put(activateCode(responce.data));
  } catch (err) {
    if (err instanceof Error) {
      yield put(setError(err));
    }
  } finally {
    yield put(setLoading(false));
  }
}

function* manageCodesWorker(action: PayloadAction<ManageCodesDto>) {
  const { codesIds, subscribeId } = action.payload;
  yield put(setLoading(true));
  try {
    const responce: AxiosResponse = yield call(ManageCodesRequest, {
      codesIds,
      subscribeId,
    });
    yield put(renderCodes(responce.data));
  } catch (err) {
    if (err instanceof Error) {
      yield put(setError(err));
    }
  } finally {
    yield put(setLoading(false));
  }
}

export function* codesWatcher() {
  yield all([
    takeLatest(CodesActionKinds.getCodes, getCodesWorker),
    takeLatest(CodesActionKinds.activateCode, activateCodeWorker),
    takeLatest(CodesActionKinds.manageCodes, manageCodesWorker),
  ]);
}
