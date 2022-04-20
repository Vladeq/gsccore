import styled, { css } from 'styled-components';

import { HeadingH2 } from '../components/heading-h2';
import { MainLayout } from '../layouts/main-layout';
import { LicenceBlock } from '../page-components/index/licence-block';

export default function Home(): JSX.Element {
  return (
    <MainLayout>
      <Heading>
        <TitleBlock>
          <HeadingH2 text="Get started with Gscore today!" />
        </TitleBlock>
        <Blocks>
          <LicenceBlock price="$77" sites="Single site" />
          <LicenceBlock price="$117" sites="3 Site" />
          <LicenceBlock price="$167" sites="10 Site" />
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
    @media ${theme.devices.laptop} {
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
