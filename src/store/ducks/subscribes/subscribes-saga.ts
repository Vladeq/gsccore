import { PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import { BuySubscribeRequest, getSubscribesRequest } from '../../../api/requests';
import { BuySubscribeDto } from '../../../types/api-types';
import { SubscribesActionKinds } from './subscribes-action-kinds';
import { renderSubscribes, setError, setLoading } from './subscribes-reducer';

function* getSubscribesWorker() {
  yield put(setLoading(true));
  try {
    const responce: AxiosResponse = yield call(getSubscribesRequest);
    yield put(renderSubscribes(responce.data));
    // console.log(responce.data);
  } catch (err) {
    if (err instanceof Error) {
      yield put(setError(err));
    }
  } finally {
    yield put(setLoading(false));
  }
}
function* buySubscribeWorker(action: PayloadAction<BuySubscribeDto>) {
  const { priceId } = action.payload;
  yield put(setLoading(true));
  try {
    const responce: AxiosResponse = yield call(BuySubscribeRequest, { priceId });
    console.log(responce.data);
  } catch (err) {
    if (err instanceof Error) {
      yield put(setError(err));
    }
  } finally {
    yield put(setLoading(false));
  }
}

export function* subscribesWatcher() {
  yield all([
    takeLatest(SubscribesActionKinds.getSubscribes, getSubscribesWorker),
    takeLatest(SubscribesActionKinds.buySubscribe, buySubscribeWorker),
  ]);
}
