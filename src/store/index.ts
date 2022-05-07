import createSagaMiddleware from '@redux-saga/core';
import { all } from '@redux-saga/core/effects';
import { combineReducers } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';

import { codesReducer } from './ducks/codes/codes-reducer';
import { codesWatcher } from './ducks/codes/codes-saga';
import { productsReducer } from './ducks/products/products-reducer';
import { productsWatcher } from './ducks/products/products-saga';
import { subscribesReducer } from './ducks/subscribes/subscribes-reducer';
import { subscribesWatcher } from './ducks/subscribes/subscribes-saga';
import { userReducer } from './ducks/user/user-reducer';
import { userWatcher } from './ducks/user/user-saga';

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
  yield all([userWatcher(), productsWatcher(), subscribesWatcher(), codesWatcher()]);
}

const rootReducer = combineReducers({
  user: userReducer.reducer,
  products: productsReducer.reducer,
  subscribes: subscribesReducer.reducer,
  codes: codesReducer.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      thunk: false,
    }),
    sagaMiddleware,
  ],
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
