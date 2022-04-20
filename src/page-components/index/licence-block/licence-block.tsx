import Link from 'next/link';
import styled, { css } from 'styled-components';
interface LicenceBlockProps {
  price: string;
  sites: string;
}
import Checked from '../../../components/ui/icons/ui-icon-checked/checked.svg';
function LicenceBlock({ price, sites }: LicenceBlockProps): JSX.Element {
  return (
    <Heading>
      <BlockInfo>
        <Price>{price}</Price>
        <LicenceText>{sites} license</LicenceText>
        <InfoText>
          Get the advanced WordPress plugin that optimizes content with GSC keywords at
          one low annual price
        </InfoText>
      </BlockInfo>
      <LiBlock>
        <Li>
          <Checked /> <LiText>Single site license</LiText>
        </Li>
        <Li>
          <Checked /> <LiText>Special introductory pricing</LiText>
        </Li>
        <Li>
          <Checked /> <LiText>Unlimited Pages and Keywords</LiText>
        </Li>
        <Li>
          <Checked /> <LiText>Billed annually</LiText>
        </Li>
      </LiBlock>
      <LinkBlock>
        <Link href="" passHref>
          <LinkText>Get Gscore</LinkText>
        </Link>
      </LinkBlock>
    </Heading>
  );
}

const Heading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.colors.backgroundBlock};
  color: ${({ theme }) => theme.colors.textPrimary};
  box-shadow: 0px 8px 28px rgba(0, 0, 0, 0.06);
  border-radius: 12px;
  margin: 6rem 0.5rem 0 0.5rem;
  transition: margin 0.5s, color 2s;
  &:hover {
    background: ${({ theme }) => theme.colors.backgroundActiveElem};
    margin: 0 0.5rem 0 0.5rem;
    p {
      color: ${({ theme }) => theme.colors.textPrimary};
    }
    a {
      color: ${({ theme }) => theme.colors.backgroundActiveElem};
    }
  }
`;
const BlockInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem 1rem 0 1rem;
  border-bottom: 1px solid #969696;
`;
const Price = styled.p`
  ${({ theme }) => css`
    font-family: ${theme.fonts.number};
    font-size: ${theme.sizes.big}rem;
    line-height: 3.6rem;
    margin: 0;
  `}
`;
const LicenceText = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.textPrimary};
    font-size: ${theme.sizes.medium}rem;
    line-height: 1.4rem;
    margin: 0.5rem;
  `}
`;
const InfoText = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.textSecondary};
    font-size: ${theme.sizes.small}rem;
    line-height: 1.8rem;
    text-align: center;
    padding-bottom: 1rem;
    margin: 0.5rem;
  `}
`;
const LiBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 1rem 0 0 0;
`;

const Li = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0;
`;
const LiText = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.textPrimary};
    font-size: ${theme.sizes.small}rem;
    line-height: 1.8rem;
    text-align: center;
    margin: 0.2rem;
    padding-left: 1rem;
  `}
`;
const LinkBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem;
  background: ${({ theme }) => theme.colors.textPrimary};
  box-shadow: 0px 8px 28px rgba(0, 0, 0, 0.06);
  border-radius: 6px;
  margin: 2rem 0 2rem 0;
`;
const LinkText = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.backgroundMain};
    font-size: ${theme.sizes.small}rem;
    line-height: 1.1rem;
    text-decoration: none;
    text-align: center;
    padding: 1rem 6rem 1rem 6rem;
  `}
`;
export default LicenceBlock;
