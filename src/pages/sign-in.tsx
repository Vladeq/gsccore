import styled, { css } from 'styled-components';

import { HeadingH2 } from '../components/heading-h2';
import { MainLayout } from '../layouts/main-layout';
import { SignInForm } from '../page-components/sign/sign-in-form';
import { StagePointer } from '../page-components/sign/stage-pointer';
import { hrefs } from '../routes/client';

export default function SignUp(): JSX.Element {
  return (
    <MainLayout>
      <Heading>
        <Pointers>
          <Pointer isActive={true} href={hrefs.signup} text="Create account" />
          <Pointer isActive={true} href={hrefs.signin} text="Login" />
          <Pointer isActive={false} href={hrefs.checkout} text="Checkout" />
        </Pointers>
        <TitleBlock>
          <HeadingH2 text="Log in" />
        </TitleBlock>
        <SignInForm />
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
