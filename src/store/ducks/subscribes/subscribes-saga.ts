import { PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import {
  BuySubscribeRequest,
  ChangeSubscribeRequest,
  getSubscribesRequest,
} from '../../../api/requests';
import { BuySubscribeDto, ChangeSubsribeDto } from '../../../types/api-types';
import { SubscribesActionKinds } from './subscribes-action-kinds';
import { renderSubscribes, setError, setLoading } from './subscribes-reducer';

function* getSubscribesWorker() {
  yield put(setLoading(true));
  try {
    const responce: AxiosResponse = yield call(getSubscribesRequest);
    yield put(renderSubscribes(responce.data));
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
  } catch (err) {
    if (err instanceof Error) {
      yield put(setError(err));
    }
  } finally {
    yield put(setLoading(false));
  }
}
function* changeSubscribeWorker(action: PayloadAction<ChangeSubsribeDto>) {
  const { productId, subscribeId } = action.payload;
  try {
    const responce: AxiosResponse = yield call(ChangeSubscribeRequest, {
      productId,
      subscribeId,
    });
  } catch (err) {
    if (err instanceof Error) {
      yield put(setError(err));
    }
  }
}

export function* subscribesWatcher() {
  yield all([
    takeLatest(SubscribesActionKinds.getSubscribes, getSubscribesWorker),
    takeLatest(SubscribesActionKinds.buySubscribe, buySubscribeWorker),
    takeLatest(SubscribesActionKinds.changeSubscribe, changeSubscribeWorker),
  ]);
}
