import { GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import styled, { css } from 'styled-components';

import { getProductsRequest } from '../api/requests';
import { Basket } from '../assets/svg-react';
import { ErrorComponent } from '../components/error-component';
import { HeadingTitle } from '../components/heading-title';
import { UIButton } from '../components/ui/ui-button';
import { MainLayout } from '../layouts/main-layout';
import { StagePointer } from '../page-components/sign/stage-pointer';
import { hrefs } from '../routes/client';
import { RootState } from '../store';
import { buySubscribeAct } from '../store/ducks/subscribes/subscribes-actions';
import { Product } from '../types/api-types';

interface CheckoutProps {
  product: Product;
}

export default function Checkout({ product }: CheckoutProps): JSX.Element {
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state.subscribes);
  console.log(state.error);
  const router = useRouter();
  const purchase = (id: number) => {
    dispatch(buySubscribeAct({ priceId: id }));
    router.push({
      pathname: hrefs.success,
      query: { name: product.name, price: product.prices[0].price },
    });
  };
  return (
    <MainLayout>
      <Heading>
        <Pointers>
          <Pointer isActive={true} href={hrefs.signup} text="Create account" />
          <Pointer isActive={true} href={hrefs.signin} text="Login" />
          <Pointer isActive={true} href={hrefs.checkout} text="Checkout" />
        </Pointers>
        <TitleBlock>
          <HeadingTitle text="Checkout" />
        </TitleBlock>
        <CheckoutBlock>
          <CheckoutTitle>
            <CheckoutTitleText>Package name</CheckoutTitleText>
            <CheckoutTitleText>Price</CheckoutTitleText>
          </CheckoutTitle>
          <LicenceBlock>
            <LicenceText>{product.name}</LicenceText>
            <LicencePrice>
              <Price>${product.prices[0].price}</Price>
              <Basket width="28px" height="28px" />
            </LicencePrice>
          </LicenceBlock>
        </CheckoutBlock>
        <TotalBlock>
          <TotalText>Total</TotalText>
          <TotalText>${product.prices[0].price}</TotalText>
        </TotalBlock>
        <InfoBlock>
          <StyledButton
            buttonType="primary"
            disabled={false}
            value="Purchase"
            isLoading={state.isLoading}
            onClick={() => purchase(product.id)}
          />
          {!!state.isError && <ErrorComponent err={state.error.message} />}
        </InfoBlock>
      </Heading>
    </MainLayout>
  );
}

export async function getServerSideProps({ query }: GetServerSidePropsContext) {
  if (!query.id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
  const { data } = await getProductsRequest();
  const product = data.filter((item: Product) => item.id == Number(query.id))[0];
  return { props: { product } };
}

const Heading = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 2rem;
  background: ${({ theme }) => theme.colors.backgroundMain};
`;

const Pointers = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 35rem;
  ${({ theme }) => css`
    @media ${theme.devices.tabletS} {
      width: 25rem;
    }
    @media ${theme.devices.mobileL} {
      flex-wrap: wrap;
      width: 15rem;
    }
  `}
`;
const Pointer = styled(StagePointer)`
  margin: 1rem 0rem 1rem 0rem;
  width: 10rem;
  ${({ theme }) => css`
    @media ${theme.devices.tabletS} {
      width: 8rem;
    }
    @media ${theme.devices.mobileL} {
      width: 7rem;
    }
  `}
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
  padding: 2rem;
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
const LicencePrice = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
const Price = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.textPrimary};
    font-size: ${theme.sizes.normal}rem;
    text-align: center;
    font-weight: 500;
    line-height: 38px;
    padding 0 1rem 0 1rem;
    margin: 0;
  `}
`;
const TotalBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
const TotalText = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.textPrimary};
    font-size: ${theme.sizes.normal}rem;
    font-weight: 700;
    line-height: 40px;
  `}
`;
const InfoBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 35rem;
`;

const StyledButton = styled(UIButton)`
  padding: 0.8rem;
  width: 40%;
  ${({ theme }) => css`
    @media ${theme.devices.mobileL} {
      width: 80%;
    }
  `}
`;
