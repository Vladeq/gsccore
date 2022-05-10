import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { hrefs } from '../routes/client';
import { RootState } from '../store';

export default function useRedirect(): { isLoading: boolean } {
  const router = useRouter();
  const state = useSelector((state: RootState) => state.user);
  useEffect(() => {
    if (state.isAuth) {
      router.push(hrefs.home);
    }
  }, [state, router]);
  return { isLoading: true };
}
