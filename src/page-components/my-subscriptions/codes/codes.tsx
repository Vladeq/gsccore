import { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ClipLoader } from 'react-spinners';
import styled, { css, ThemeContext } from 'styled-components';

import { ErrorComponent } from '../../../components/error-component/index';
import { activateCodeAct, getCodesAct } from '../../../store/ducks/codes/codes-actions';
import { selectCodes } from '../../../store/ducks/codes/codes-selectors';
import { RootState } from '../../../store/index';
import { CodeBlock } from '../code-block/index';

function Codes(): JSX.Element {
  const theme = useContext(ThemeContext);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCodesAct());
  }, []);
  const activate = (codeString: string) => {
    dispatch(activateCodeAct({ code: codeString }));
  };
  const state = useSelector((state: RootState) => state.codes);
  const codes = useSelector((state: RootState) => selectCodes(state.codes));
  return (
    <Heading>
      {state.isLoading ? (
        <ClipLoader loading={true} size={150} color={theme.colors.error} css={loader} />
      ) : state.isError ? (
        <ErrorComponent err={state.error.message} />
      ) : (
        <>
          {codes.map((code) => {
            return (
              <CodeBlock
                key={code.id}
                code={code.code}
                origin={code.origin}
                status={code.status}
                pressActivate={activate}
              />
            );
          })}
        </>
      )}
    </Heading>
  );
}
const Heading = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
  `}
`;
const loader = css`
  margin: 2rem;
`;
export default Codes;
