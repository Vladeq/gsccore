import { User } from '../../../types/api-types';

export interface UserState extends User {
  isLoading: boolean;
  isError: boolean;
  error: any;
}

export const initialState: UserState = {
  isLoading: false,
  isError: false,
  error: null,
  token: '',
  id: 0,
  email: '',
  username: '',
  password: '',
};
