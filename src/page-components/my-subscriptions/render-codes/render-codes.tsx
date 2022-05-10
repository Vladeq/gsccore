import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { css } from 'styled-components';

import { UIButton } from '../../../components/ui/ui-button';
import {
  activateCodeAct,
  manageCodesAct,
} from '../../../store/ducks/codes/codes-actions';
import {
  selectCheckedCodes,
  selectCodes,
} from '../../../store/ducks/codes/codes-selectors';
import { RootState } from '../../../store/index';
import { CodeBlock } from '../code-block/index';

function RenderCodes(): JSX.Element {
  const dispatch = useDispatch();
  const activate = (codeString: string) => {
    dispatch(activateCodeAct({ code: codeString }));
  };
  const state = useSelector((state: RootState) => state.codes);
  const codes = useSelector((state: RootState) => selectCodes(state.codes));
  const checkedCodes = useSelector((state: RootState) => selectCheckedCodes(state.codes));
  const manageCodesHandler = useCallback(
    () =>
      dispatch(
        manageCodesAct({
          codesIds: checkedCodes,
          subscribeId: codes[0].subscribeId,
        }),
      ),
    [dispatch, checkedCodes, codes],
  );
  return (
    <>
      {codes.length !== 0 ? (
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
            onClick={manageCodesHandler}
          />
        </KeepButtonBlock>
      ) : null}
    </>
  );
}

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

export default RenderCodes;
