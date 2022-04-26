import { Product } from '../../../types/api-types';

export interface productsState {
  products: Record<number, Product>;
}
export const initialState: productsState = {
  products: {},
};
