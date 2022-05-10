import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { css } from 'styled-components';

import { Refresh } from '../../../assets/svg-react';
import { ErrorComponent } from '../../../components/error-component/index';
import { getCodesAct } from '../../../store/ducks/codes/codes-actions';
import { RootState } from '../../../store/index';
import { RenderCodes } from '../render-codes';

function Codes(): JSX.Element {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCodesAct());
  }, [dispatch]);
  const state = useSelector((state: RootState) => state.codes);

  return (
    <Heading>
      {state.isLoading ? (
        <Loader>
          <Refresh />
        </Loader>
      ) : state.isError ? (
        <ErrorComponent err={state.error.message} />
      ) : (
        <RenderCodes />
      )}
    </Heading>
  );
}
const Heading = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    max-width: 100%;
    margin: 0 1rem 0 1rem;
  `}
`;
const Loader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export default Codes;
