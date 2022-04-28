import { AxiosResponse } from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import { getProductsRequest } from '../../../api/requests';
import { ProductsActionKinds } from './products-action-kinds';
import { renderProducts, setError, setLoading } from './products-reducer';

function* getProductsWorker() {
  yield put(setLoading(true));
  try {
    const responce: AxiosResponse = yield call(getProductsRequest);
    yield put(renderProducts(responce.data));
  } catch (err) {
    if (err instanceof Error) {
      yield put(setError(err));
    }
  } finally {
    yield put(setLoading(false));
  }
}

export function* productsWatcher() {
  yield all([takeLatest(ProductsActionKinds.getProducts, getProductsWorker)]);
}
