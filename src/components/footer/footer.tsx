import styled, { css } from 'styled-components';

import { Logo } from '../logo';
import { UIIconFb } from '../ui/icons/ui-icon-fb/index';
import { UIIconIn } from '../ui/icons/ui-icon-in/index';
import { UIIconTwitter } from '../ui/icons/ui-icon-twitter/index';

function Footer(): JSX.Element {
  return (
    <Heading>
      <InfoBlock>
        <ColumnBlock>
          <Logo />
          <InfoText>
            Ut enim ad minim veniam quis nostrud exercitation ea commodo
          </InfoText>
        </ColumnBlock>
      </InfoBlock>
      <CopyrightBlock>
        <Copyright>
          <CopyrightText>Copyright © 2022 GScore | All Rights Reserved</CopyrightText>
          <ABlock>
            <CopyrightText>
              | <A href="">Cookie</A> | <A href="">Privacy Policy</A>
            </CopyrightText>
          </ABlock>
        </Copyright>
        <SocialBlock>
          <UIIconFb />
          <UIIconTwitter />
          <UIIconIn />
        </SocialBlock>
      </CopyrightBlock>
    </Heading>
  );
}

const Heading = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.backgroundMain};
  border-top: 1px solid #393939;
`;
const InfoBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  background: ${({ theme }) => theme.colors.backgroundMain};
  padding: 2rem;
  width: 20rem;
`;
const ColumnBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

const InfoText = styled.p`
  ${({ theme }) => css`
    font-family: ${theme.fonts.secondary};
    color: ${theme.colors.textSecondary};
    font-size: ${theme.sizes.small}rem;
    line-height: 1.8rem;
  `}
`;
const CopyrightBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.colors.backgroundMain};
  border-top: 1px solid #393939;
  width: 90%;
  margin: auto;
  ${({ theme }) => css`
    @media ${theme.devices.laptop} {
      flex-direction: column;
    }
  `}
`;
const Copyright = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  ${({ theme }) => css`
    @media ${theme.devices.laptop} {
      flex-direction: column;
    }
  `}
`;
const CopyrightText = styled.p`
  ${({ theme }) => css`
    font-family: ${theme.fonts.secondary};
    color: ${theme.colors.textSecondary};
    font-size: ${theme.sizes.small}rem;
    line-height: 1.8em;
  `}
`;
const ABlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding-left: 0.3em;
`;
const A = styled.a`
  ${({ theme }) => css`
    font-family: ${theme.fonts.secondary};
    color: ${theme.colors.textSecondary};
    font-size: ${theme.sizes.small}rem;
  `}
`;
const SocialBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  background: ${({ theme }) => theme.colors.backgroundMain};
`;
export default Footer;
