import styled, { css } from 'styled-components';

import { Copy } from '../../../assets/svg-react';
import { UIButton } from '../../../components/ui/ui-button';
import { UICheckbox } from '../../../components/ui/ui-checkbox';
import { Status } from '../status';

interface CodeProps {
  code: string;
  origin: string;
  status: string;
  pressActivate: (arg0: string) => void;
}

function CodeBlock({ code, origin, status, pressActivate }: CodeProps): JSX.Element {
  return (
    <Heading>
      <CheckBlock>
        <UICheckbox />
      </CheckBlock>
      <LicenceBlock>
        <Title>Licence code</Title>
        <Field>
          <FieldText>{code}</FieldText>
          <Copy />
        </Field>
      </LicenceBlock>
      <DomainBlock>
        <Title>Domain</Title>
        <Domain>
          <Field>
            <FieldText>{origin}</FieldText>
          </Field>
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
        <Title>Status</Title>
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
    width: 80;
    margin: 2rem;
  `}
`;
const CheckBlock = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 5%;
  `}
`;
const LicenceBlock = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 40%;
    margin: 1rem;
  `}
`;
const DomainBlock = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 45%;
    margin: 1rem;
  `}
`;
const StatusBlock = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 5%;
    margin: 1rem;
  `}
`;
const Title = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.filled};
    font-size: ${theme.sizes.extraSmall}rem;
    font-weight: 700;
    line-height: 18px;
    margin-top: 0.5rem;
  `}
`;
const Field = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: nowrap;
    background: ${theme.colors.neutral};
    border-radius: 6px;
    width: 100%;
    height: 50px;
  `}
`;
const Domain = styled.div`
  display: flex;
  flex-direction: row;
`;
const StyledButton = styled(UIButton)`
  ${({ theme }) => css`
    margin: 0 1rem 0 1rem;
    padding: 0 0.5rem 0 0.5rem;
  `}
`;
const FieldText = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.filled};
    font-size: ${theme.sizes.extraSmall}rem;
    font-weight: 500;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 5px;
    width: 90%;
  `}
`;

export default CodeBlock;
