import { createAction } from '@reduxjs/toolkit';

import { ProductsActionKinds } from './products-action-kinds';

export const getProductsAct = createAction(ProductsActionKinds.getProducts);
