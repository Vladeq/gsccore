import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { hrefs } from '../routes/client';
import { RootState } from '../store';
import { setLoading } from '../store/ducks/user/user-reducer';

export default function useRedirect(): { isLoading: boolean } {
  const router = useRouter();
  const state = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    if (state.isAuth) {
      router.push(hrefs.home);
      dispatch(setLoading(true));
    }
  }, [state]);
  return { isLoading: state.isLoading };
}
