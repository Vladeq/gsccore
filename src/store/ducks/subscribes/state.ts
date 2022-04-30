import { Subscribe } from '../../../types/api-types';

export interface subscribesState {
  isLoading: boolean;
  isError: boolean;
  error: any;
  subscribes: Record<number, Subscribe>;
}
export const initialState: subscribesState = {
  isLoading: true,
  isError: false,
  error: null,
  subscribes: {},
};
