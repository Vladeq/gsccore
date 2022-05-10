import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { css } from 'styled-components';

import { Checked } from '../../../assets/svg-react/index';
import { hrefs } from '../../../routes/client';
import { RootState } from '../../../store';
import { ChangeSubsribeAct } from '../../../store/ducks/subscribes/subscribes-actions';

interface LicenceBlockProps {
  id: number;
  price: string;
  sites: string;
}
function LicenceBlock({ id, price, sites }: LicenceBlockProps): JSX.Element {
  const dispatch = useDispatch();
  const { username } = useSelector((state: RootState) => state.user);
  const router = useRouter();
  const { activeId } = router.query;
  const routerHandler = useCallback(
    async (productId: number, activeId?: string) => {
      if (activeId) {
        const subscribeId = Number(activeId);
        dispatch(ChangeSubsribeAct({ subscribeId, productId }));
        router.push(hrefs.subscriptions);
      } else {
        if (username) {
          router.push({ pathname: hrefs.checkout, query: { id } });
        } else {
          router.push({ pathname: hrefs.signup, query: { id } });
        }
      }
    },
    [dispatch, router, username, id],
  );

  const getGscoreHandler = useCallback(
    () => routerHandler(id, activeId as string | undefined),
    [activeId, id, routerHandler],
  );
  return (
    <Heading>
      <BlockInfo>
        <Price>${price}</Price>
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
        <LinkText onClick={getGscoreHandler}>Get Gscore</LinkText>
      </LinkBlock>
    </Heading>
  );
}

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
    ${InfoText} {
      color: ${({ theme }) => theme.colors.textPrimary};
    }
    ${LinkText} {
      color: ${({ theme }) => theme.colors.backgroundActiveElem};
    }
  }
`;
export default LicenceBlock;
