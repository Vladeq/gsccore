import styled, { css } from 'styled-components';

import { UIButton } from '../../../components/ui/ui-button';
import { Status } from '../status/index';

function SubscriptionBlock(): JSX.Element {
  return (
    <Heading>
      <TitleBlock>
        <TitleText>GScore</TitleText>
        <Status text="Active" />
      </TitleBlock>
      <LicenceBlock>
        <LicenceInfo>
          <LicenceText>Single site license</LicenceText>
          <LicenceValid>valid until 21.10.2022</LicenceValid>
        </LicenceInfo>
        <LicencePrice>$77</LicencePrice>
      </LicenceBlock>
      <StyledButton buttonType="secondary" value="View" isLoading={false} />
    </Heading>
  );
}

const Heading = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    background: ${theme.colors.backgroundBlock};
    border-radius: 12px;
    width: 600px;
    margin: 2rem;
  `}
`;
const TitleBlock = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px solid ${theme.colors.filled};
    padding: 1rem 2rem 0.5rem 2rem;
  `}
`;
const TitleText = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.textPrimary};
    font-size: ${theme.sizes.small}rem;
    font-weight: 700;
    line-height: 28px;
  `}
`;
const LicenceBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem 2rem 0.5rem 2rem;
`;
const LicenceInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
const LicenceText = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.textPrimary};
    font-size: ${theme.sizes.normal}rem;
    font-weight: 500;
    line-height: 26px;
    margin: 0;
  `}
`;
const LicenceValid = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.filled};
    font-size: ${theme.sizes.extraSmall}rem;
    font-weight: 500;
    line-height: 18px;
    margin-top: 0.5rem;
  `}
`;
const LicencePrice = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.textPrimary};
    font-size: ${theme.sizes.normal}rem;
    text-align: center;
    font-weight: 500;
    line-height: 26px;
    padding 0 1rem 0 1rem;
    margin: 0;
  `}
`;

const StyledButton = styled(UIButton)`
  ${({ theme }) => css`
    margin: 1rem 0 2rem 2rem;
    padding: 1rem;
    width: 20%;
  `}
`;
export default SubscriptionBlock;
