import { User } from '../../../types/api-types';

export interface UserState extends User {
  isLoading: boolean;
  isError: boolean;
  isAuth: boolean;
  error: any;
}

export const initialState: UserState = {
  isLoading: false,
  isError: false,
  isAuth: false,
  error: null,
  token: '',
  id: 0,
  email: '',
  username: '',
};
