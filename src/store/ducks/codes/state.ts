import { Code } from '../../../types/api-types';

export interface codesState {
  isLoading: boolean;
  isError: boolean;
  error: any;
  codes: Record<number, Code>;
}
export const initialState: codesState = {
  isLoading: true,
  isError: false,
  error: null,
  codes: {},
};
