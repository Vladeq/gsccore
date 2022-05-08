import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { setLoading } from '../store/ducks/user/user-reducer';
import { hrefs } from '../routes/client';

export default function useRedirect(isAuth: boolean): { isLoading: boolean } {
  const router = useRouter()
  const state = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    if (state.isAuth) {
      router.push(hrefs.home);
      dispatch(setLoading(true))
    }
  }, [state]);
  return { isLoading: state.isLoading };
}
