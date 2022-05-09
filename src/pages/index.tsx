import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { css } from 'styled-components';

import { Refresh } from '../assets/svg-react';
import { ErrorComponent } from '../components/error-component/index';
import { HeadingH2 } from '../components/heading-h2';
import { MainLayout } from '../layouts/main-layout';
import { LicenceBlock } from '../page-components/index/licence-block';
import { RootState } from '../store';
import { getProductsAct } from '../store/ducks/products/products-actions';
import { selectProduct } from '../store/ducks/products/products-selectors';

export default function Home(): JSX.Element {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductsAct());
  }, []);
  const state = useSelector((state: RootState) => state.products);
  const products = useSelector((state: RootState) => selectProduct(state.products));
  return (
    <MainLayout>
      <Heading>
        <TitleBlock>
          <HeadingH2 text="Get started with Gscore today!" />
        </TitleBlock>
        <Blocks>
          {state.isLoading ? (
            <Refresh />
          ) : state.isError ? (
            <ErrorComponent err={state.error.message} />
          ) : (
            products.map((product) => {
              return (
                <LicenceBlock
                  key={product.id}
                  id={product.id}
                  price={product.prices[0].price}
                  sites={product.name}
                />
              );
            })
          )}
        </Blocks>
        <OfferBlock>
          <OfferText>Have more than 10 sites?</OfferText>
          <OfferA href="">Contact us</OfferA>
        </OfferBlock>
      </Heading>
    </MainLayout>
  );
}

const Heading = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background: ${({ theme }) => theme.colors.backgroundMain};
`;
const Blocks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background: ${({ theme }) => theme.colors.backgroundMain};
  ${({ theme }) => css`
    @media ${theme.devices.tablet} {
      flex-direction: column;
    }
  `}
`;
const TitleBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const OfferBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 0 2rem 0;
`;
const OfferText = styled.p`
  ${({ theme }) => css`
    font-family: ${theme.fonts.secondary};
    color: ${theme.colors.textPrimary};
    font-size: ${theme.sizes.small}rem;
    line-height: 1.8em;
    margin: 0;
  `}
`;
const OfferA = styled.a`
  ${({ theme }) => css`
    font-family: ${theme.fonts.secondary};
    color: ${theme.colors.backgroundActiveElem};
    font-size: ${theme.sizes.small}rem;
    text-align: center;
    line-height: 1.8em;
  `}
`;
