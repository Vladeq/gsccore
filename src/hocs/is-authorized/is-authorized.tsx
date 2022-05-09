import { ComponentType } from 'react';

import { Refresh } from '../../assets/svg-react';
import useRedirect from '../../hooks/use-redirect';

function IsAutorized<T>(Child: ComponentType<T>): ComponentType<T> {
  return function Auth(props: T): JSX.Element {
    const { isLoading } = useRedirect();
    if (isLoading) {
      return <Refresh />;
    } else {
      return <Child {...props} />;
    }
  };
}

export default IsAutorized;
