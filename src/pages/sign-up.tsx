import Link from 'next/link';
import { useRouter } from 'next/router';
import styled, { css } from 'styled-components';

import { HeadingTitle } from '../components/heading-title';
import { UiAnchor } from '../components/ui/ui-anchor';
import { IsAuthorized } from '../hocs/is-authorized/index';
import { MainLayout } from '../layouts/main-layout';
import { SignUpForm } from '../page-components/sign/sign-up-form';
import { StagePointer } from '../page-components/sign/stage-pointer';
import { hrefs } from '../routes/client';

function SignUp(): JSX.Element {
  const router = useRouter();
  const { id } = router.query;
  return (
    <MainLayout>
      <Heading>
        <Pointers>
          <Pointer isActive={true} href={hrefs.signup} text="Create account" />
          <Pointer isActive={false} href={hrefs.signin} text="Login" />
          <Pointer isActive={false} href={hrefs.checkout} text="Checkout" />
        </Pointers>
        <TitleBlock>
          <HeadingTitle text="Create account" />
          <Text>
            You need to enter your name and email. We will send you a temporary password
            by email
          </Text>
        </TitleBlock>
        <SignUpForm />
        <DirectBlock>
          <DirectText>Have an account? </DirectText>
          <Link href={{ pathname: hrefs.signin, query: { id } }} passHref={true}>
            <UiAnchor anchorType="main">Go to the next step</UiAnchor>
          </Link>
        </DirectBlock>
      </Heading>
    </MainLayout>
  );
}

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
    margin: 0.5rem 1rem 0.5rem 1rem;
  `}
`;
const DirectBlock = styled.div`
  display: flex;
  flex-direction: row;
  width: 35rem;
  margin: 2rem 0 2rem 0;
  ${({ theme }) => css`
    @media ${theme.devices.tabletS} {
      width: 25rem;
    }
    @media ${theme.devices.mobileL} {
      width: 15rem;
    }
  `}
`;
const DirectText = styled.p`
  ${({ theme }) => css`
    font-family: ${theme.fonts.secondary};
    color: ${theme.colors.textPrimary};
    font-size: ${theme.sizes.extraSmall}rem;
    line-height: 22px;
    margin: 0;
    padding-right: 0.2rem;
  `}
`;
export default IsAuthorized(SignUp);
