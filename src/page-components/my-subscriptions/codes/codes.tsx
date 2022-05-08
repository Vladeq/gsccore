import { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ClipLoader } from 'react-spinners';
import styled, { css, ThemeContext } from 'styled-components';

import { ErrorComponent } from '../../../components/error-component/index';
import { UIButton } from '../../../components/ui/ui-button';
import {
  activateCodeAct,
  getCodesAct,
  manageCodesAct,
} from '../../../store/ducks/codes/codes-actions';
import {
  selectCheckedCodes,
  selectCodes,
} from '../../../store/ducks/codes/codes-selectors';
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
  const checkedCodes = useSelector((state: RootState) => selectCheckedCodes(state.codes));
  return (
    <Heading>
      {state.isLoading ? (
        <ClipLoader loading={true} size={150} color={theme.colors.error} css={loader} />
      ) : state.isError ? (
        <ErrorComponent err={state.error.message} />
      ) : codes.length !== 0 ? (
        <>
          {codes.map((code) => {
            return (
              <CodeBlock
                key={code.id}
                id={code.id}
                code={code.code}
                origin={code.origin}
                status={code.status}
                isChecked={code.isChecked}
                pressActivate={activate}
              />
            );
          })}
        </>
      ) : null}
      {checkedCodes.length ? (
        <KeepButtonBlock>
          <Text>Select the domains you want to keep</Text>
          <StyledButton
            buttonType="primary"
            isLoading={state.isLoading}
            value="Confirm"
            onClick={() =>
              dispatch(
                manageCodesAct({
                  codesIds: checkedCodes,
                  subscribeId: codes[0].subscribeId,
                }),
              )
            }
          />
        </KeepButtonBlock>
      ) : null}
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
const KeepButtonBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 1rem;
`;
const Text = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.textPrimary};
    font-size: ${theme.sizes.normal}rem;
    font-weight: 700;
    line-height: 40px;
    margin: 0;
  `}
`;
const StyledButton = styled(UIButton)`
  padding: 0 0.2rem 0 0.2rem;
  width: 10%;
  ${({ theme }) => css`
    @media ${theme.devices.mobileL} {
      width: 80%;
    }
  `}
`;
const loader = css`
  margin: 2rem;
`;
export default Codes;
