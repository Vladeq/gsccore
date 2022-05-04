import { useRouter } from 'next/router';
import styled, { css } from 'styled-components';

import { HeadingH2 } from '../components/heading-h2';
import { UIButton } from '../components/ui/ui-button';
import { MainLayout } from '../layouts/main-layout';
import { hrefs } from '../routes/client';

export default function SuccessfulPurchase(): JSX.Element {
  const router = useRouter();
  const { name, price } = router.query;
  return (
    <MainLayout>
      <Heading>
        <TitleBlock>
          <HeadingH2 text="Start your subscription" />
          <Text>
            We have sent you a payment receipt by e-mail and a link to download the plugin
            with a license key.
          </Text>
        </TitleBlock>
        <CheckoutBlock>
          <CheckoutTitle>
            <CheckoutTitleText>Package name</CheckoutTitleText>
            <CheckoutTitleText>Price</CheckoutTitleText>
          </CheckoutTitle>
          <LicenceBlock>
            <LicenceText>{name}</LicenceText>
            <Price>${price}</Price>
          </LicenceBlock>
        </CheckoutBlock>
        <StyledButton
          buttonType="primary"
          disabled={false}
          value="Go to my subscription"
          isLoading={false}
          onClick={() => router.push(hrefs.subscriptions)}
        />
      </Heading>
    </MainLayout>
  );
}

const Heading = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 2rem;
  background: ${({ theme }) => theme.colors.backgroundMain};
`;
const TitleBlock = styled.div`
  margin: 1rem 0 1rem 0;
  display: flex;
  flex-direction: column;
  width: 35rem;
  ${({ theme }) => css`
    @media ${theme.devices.tabletS} {
      width: 25rem;
    }
    @media ${theme.devices.mobileL} {
      width: 20rem;
      align-items: center;
      justify-content: center;
    }
  `}
`;
const Text = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.textPrimary};
    font-size: ${theme.sizes.extraSmall}rem;
    font-weight: 500;
    line-height: 24px;
    margin: 0.5rem 0 0.5rem 0;
  `}
`;
const CheckoutBlock = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    background: ${theme.colors.backgroundBlock};
    border-radius: 12px;
    width: 35rem;
    margin: 1rem;
  `}
`;
const CheckoutTitle = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px solid ${theme.colors.filled};
    padding: 1rem 4rem 0.5rem 2rem;
  `}
`;
const CheckoutTitleText = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.textPrimary};
    font-size: ${theme.sizes.normal}rem;
    font-weight: 700;
    line-height: 34px;
  `}
`;
const LicenceBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 2rem 4rem 2rem 2rem;
`;
const LicenceText = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.textPrimary};
    font-size: ${theme.sizes.normal}rem;
    font-weight: 500;
    line-height: 38px;
    margin: 0;
  `}
`;
const Price = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.textPrimary};
    font-size: ${theme.sizes.normal}rem;
    text-align: center;
    font-weight: 500;
    line-height: 38px;
    margin: 0;
  `}
`;
const StyledButton = styled(UIButton)`
  margin-top: 1rem;
  padding: 0.8rem;
  width: 35rem;
  ${({ theme }) => css`
    @media ${theme.devices.mobileL} {
      width: 80%;
    }
  `}
`;
