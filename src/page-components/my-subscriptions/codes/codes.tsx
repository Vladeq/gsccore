import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { css } from 'styled-components';

import { Refresh } from '../../../assets/svg-react';
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
        <Loader>
          <Refresh />
        </Loader>
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
    max-width: 100%;
    margin: 0 1rem 0 1rem;
  `}
`;
const KeepButtonBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 2rem;
`;
const Text = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.textPrimary};
    font-size: ${theme.sizes.small}rem;
    font-weight: 700;
    line-height: 22px;
    margin: 0;
  `}
`;
const StyledButton = styled(UIButton)`
  padding: 26px;
  width: 148px;
  ${({ theme }) => css`
    @media ${theme.devices.mobileL} {
      width: 80%;
    }
  `}
`;
const Loader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export default Codes;
