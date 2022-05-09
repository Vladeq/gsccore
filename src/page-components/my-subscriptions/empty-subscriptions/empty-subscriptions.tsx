import { useRouter } from 'next/router';
import styled, { css } from 'styled-components';

import { Empty } from '../../../assets/svg-react';
import { UIButton } from '../../../components/ui/ui-button';
import { hrefs } from '../../../routes/client';

function EmptySubscriptions(): JSX.Element {
  const router = useRouter();
  return (
    <Heading>
      <Empty />
      <TextH>No active subscriptions</TextH>
      <Textp>You can subscribe right now by clicking on the button below</Textp>
      <StyledButton
        buttonType="primary"
        value="Get GScore"
        isLoading={false}
        onClick={() => router.push(hrefs.home)}
      />
    </Heading>
  );
}

const Heading = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  `}
`;
const TextH = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.textPrimary};
    font-size: ${theme.sizes.medium}rem;
    line-height: 1.4rem;
    margin: 1rem;
  `}
`;
const Textp = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.textPrimary};
    font-size: ${theme.sizes.small}rem;
    line-height: 1.8rem;
    text-align: center;
    padding-bottom: 1rem;
    margin: 0.5rem;
    width: 20%;
  `}
`;
const StyledButton = styled(UIButton)`
  padding: 0.8rem;
  width: 10%;
  margin-bottom: 1rem;
  ${({ theme }) => css`
    @media ${theme.devices.mobileL} {
      width: 80%;
    }
  `}
`;

export default EmptySubscriptions;
