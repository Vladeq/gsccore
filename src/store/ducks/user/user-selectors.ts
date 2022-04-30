import { RootState } from '../../index';

export const selectToken = (state: RootState) => state.user.token;
