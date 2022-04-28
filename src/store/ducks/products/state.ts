import { Product } from '../../../types/api-types';

export interface productsState {
  isLoading: boolean;
  isError: boolean;
  error: any;
  products: Record<number, Product>;
}
export const initialState: productsState = {
  isLoading: true,
  isError: false,
  error: null,
  products: {},
};
