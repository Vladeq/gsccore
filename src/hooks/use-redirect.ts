import Router from 'next/router';
import { useEffect, useState } from 'react';

import { hrefs } from '../routes/client';

export default function useRedirect(isAuth: boolean): { isLoading: boolean } {
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    if (isAuth) {
      Router.push(hrefs.home);
      setLoading(true);
    }
  }, [isLoading]);
  return { isLoading };
}
