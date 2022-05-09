import { ComponentType, useContext } from 'react';
import { ClipLoader } from 'react-spinners';
import { css, ThemeContext } from 'styled-components';

import useRedirect from '../../hooks/use-redirect';

function IsAutorized<T>(Child: ComponentType<T>): ComponentType<T> {
  return function Auth(props: T): JSX.Element {
    const theme = useContext(ThemeContext);
    const { isLoading } = useRedirect();
    if (isLoading) {
      return (
        <ClipLoader loading={true} size={150} color={theme.colors.error} css={loader} />
      );
    } else {
      return <Child {...props} />;
    }
  };
}

const loader = css`
  margin: 2rem;
`;

export default IsAutorized;
