import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useDispatch } from 'react-redux';
import styled, { css } from 'styled-components';

import { Copy } from '../../../assets/svg-react';
import { UIButton } from '../../../components/ui/ui-button';
import { UICheckbox } from '../../../components/ui/ui-checkbox';
import { setChecked } from '../../../store/ducks/codes/codes-reducer';
import { Status } from '../status';

interface CodeProps {
  id: number;
  code: string;
  origin: string;
  status: string;
  isChecked: boolean;
  pressActivate: (arg0: string) => void;
}

function CodeBlock({
  id,
  code,
  origin,
  status,
  isChecked,
  pressActivate,
}: CodeProps): JSX.Element {
  const dispatch = useDispatch();
  return (
    <Heading>
      <CheckBlock onClick={() => dispatch(setChecked({ id }))}>
        <UICheckbox checked={isChecked} />
      </CheckBlock>
      <LicenceBlock>
        <Title>Licence code</Title>
        <CopyToClipboard text={code}>
          <Field>
            <FieldText>{code}</FieldText>
            <CopyButton>
              <Copy />
            </CopyButton>
          </Field>
        </CopyToClipboard>
      </LicenceBlock>
      <DomainBlock>
        <Title>Domain</Title>
        <Domain>
          <DomainField>
            <FieldText>{origin}</FieldText>
          </DomainField>
          {status === 'INACTIVE' ? (
            <StyledButton
              buttonType="secondary"
              value="Activate"
              isLoading={false}
              onClick={() => pressActivate(code)}
            />
          ) : null}
        </Domain>
      </DomainBlock>
      <StatusBlock>
        <StatusTitle>Status</StatusTitle>
        <Status text={status} />
      </StatusBlock>
    </Heading>
  );
}

const Heading = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: nowrap;
    background: ${theme.colors.backgroundBlock};
    border-radius: 12px;
    margin: 1rem;
    @media ${theme.devices.tablet} {
      flex-direction: column;
      position: relative;
    }
  `}
`;
const CopyButton = styled.button`
  background: none;
  border: none;
`;
const CheckBlock = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2.5rem 0.5rem 0.5rem 0.5rem;
    width: 5%;
    @media ${theme.devices.tablet} {
      position: absolute;
      left: 5%;
      top: 10%;
      margin: 0;
    }
  `}
`;
const LicenceBlock = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 25%;
    margin: 1rem;
    @media ${theme.devices.tablet} {
      width: 90%;
      margin-top: 4rem;
    }
  `}
`;
const DomainBlock = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 45%;
    margin: 1rem;
    @media ${theme.devices.tablet} {
      width: 90%;
    }
  `}
`;
const StatusBlock = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 5%;
    margin: 1rem;
    @media ${theme.devices.tablet} {
      position: absolute;
      left: 10%;
      top: 0;
    }
  `}
`;
const Title = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.filled};
    font-size: ${theme.sizes.extraSmall}rem;
    font-weight: 700;
    line-height: 18px;
    margin: 0.5rem;
  `}
`;
const StatusTitle = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.filled};
    font-size: ${theme.sizes.extraSmall}rem;
    font-weight: 700;
    line-height: 18px;
    margin: 0.5rem;
    @media ${theme.devices.tablet} {
      display: none;
    }
  `}
`;
const Field = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    flex-wrap: nowrap;
    background: ${theme.colors.neutral};
    border-radius: 6px;
    width: 100%;
    height: 50px;
  `}
`;
const DomainField = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: nowrap;
    background: ${theme.colors.neutral};
    border-radius: 6px;
    padding: 0 10px 0 10px;
    width: 100%;
    height: 50px;
  `}
`;
const Domain = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;
const StyledButton = styled(UIButton)`
  ${({ theme }) => css`
    margin: 0 1rem 0 1rem;
    padding: 0 0.5rem 0 0.5rem;
    @media ${theme.devices.tablet} {
      position: absolute;
      right: 5%;
      top: 4%;
      width: 110px;
      height: 60px;
    }
  `}
`;
const FieldText = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.filled};
    font-size: ${theme.sizes.extraSmall}rem;
    font-weight: regular;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin: 5px;
    max-width: 50%;
  `}
`;

export default CodeBlock;
