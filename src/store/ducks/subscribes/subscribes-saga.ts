import { AxiosResponse } from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import { getSubscribesRequest } from '../../../api/requests';
import { SubscribesActionKinds } from './subscribes-action-kinds';
import { setError, setLoading } from './subscribes-reducer';

function* getSubscribesWorker() {
  yield put(setLoading(true));
  try {
    const responce: AxiosResponse = yield call(getSubscribesRequest);
    // yield put(renderProducts(responce.data));
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
  yield all([takeLatest(SubscribesActionKinds.getSubscribes, getSubscribesWorker)]);
}
