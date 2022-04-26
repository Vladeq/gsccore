import { AxiosResponse } from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import { getProductsRequest } from '../../../api/requests';
import { ProductsActionKinds } from './products-action-kinds';
import { renderProducts } from './products-reducer';

function* getProductsWorker() {
  const responce: AxiosResponse = yield call(getProductsRequest);
  yield put(renderProducts(responce.data));
}

export function* productsWatcher() {
  yield all([takeLatest(ProductsActionKinds.getProducts, getProductsWorker)]);
}
