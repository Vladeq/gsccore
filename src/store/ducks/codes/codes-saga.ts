import { AxiosResponse } from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import { getCodesRequest } from '../../../api/requests';
import { CodesActionKinds } from './codes-action-kinds';
import { renderCodes, setError, setLoading } from './codes-reducer';

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

export function* codesWatcher() {
  yield all([takeLatest(CodesActionKinds.getCodes, getCodesWorker)]);
}
