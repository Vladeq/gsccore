import { ComponentType, useContext } from 'react';
import { useSelector } from 'react-redux';
import { ClipLoader } from 'react-spinners';
import { css, ThemeContext } from 'styled-components';

import useRedirect from '../../hooks/use-redirect';
import { RootState } from '../../store';

function IsAutorized<T>(Child: ComponentType<T>): ComponentType<T> {
  return function (props: T): JSX.Element {
    const theme = useContext(ThemeContext);
    const state = useSelector((state: RootState) => state.user);
    const { isLoading } = useRedirect(state.isAuth);
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
