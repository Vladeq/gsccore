import Link from 'next/link';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import styled, { css } from 'styled-components';

import { HeadingH2 } from '../components/heading-h2';
import { InputController } from '../components/input-controller';
import { UIButton } from '../components/ui/ui-button';
import { Errors } from '../input-errors/errors';
import { required, validateEmail } from '../input-errors/validators';
import { MainLayout } from '../layouts/main-layout';
import { StagePointer } from '../page-components/sign/stage-pointer';
import { theme } from '../theme/theme';
import { SignUpDto } from '../types/api-types';

export default function SignUp(): JSX.Element {
  const { control, handleSubmit, getValues, setError, formState } = useForm<SignUpDto>({
    defaultValues: { email: '', name: '', password: '' },
    mode: 'onChange',
  });

  useEffect(() => {
    Object.keys(getValues()).forEach((value) => {
      setError(Errors[value].name, {
        type: Errors[value].type,
        message: Errors[value].message,
      });
    });
  }, [setError]);

  const onSubmit: SubmitHandler<SignUpDto> = (data) => console.log(data);

  console.log(formState.isValid);
  return (
    <MainLayout>
      <Heading>
        <Pointers>
          <Pointer color={theme.colors.backgroundActiveElem} text="Create account" />
          <Pointer color={theme.colors.neutral} text="Login" />
          <Pointer color={theme.colors.neutral} text="Checkout" />
        </Pointers>
        <TitleBlock>
          <HeadingH2 text="Create account" />
          <Text>
            You need to enter your name and email. We will send you a temporary password
            by email
          </Text>
        </TitleBlock>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputController
            control={control}
            placeholder="Enter email"
            name="email"
            rules={{ validate: validateEmail }}
          />
          <InputController
            control={control}
            placeholder="Enter name"
            name="name"
            rules={{ validate: required }}
          />
          <InputController
            control={control}
            placeholder="Enter password"
            name="password"
            rules={{ validate: required }}
          />
          <StyledButton
            color={theme.colors.backgroundActiveElem}
            type="submit"
            disabled={!formState.isValid}
          >
            Send password
          </StyledButton>
        </Form>
        <DirectBlock>
          <DirectText>Have an account? </DirectText>
          <Link href="/sign-in">
            <DirectA> Go to the next step</DirectA>
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
const Form = styled.form`
  width: 35rem;
  display: flex;
  flex-direction: column;
  ${({ theme }) => css`
    @media ${theme.devices.tabletS} {
      width: 25rem;
    }
    @media ${theme.devices.mobileL} {
      width: 15rem;
    }
  `}
`;
const StyledButton = styled(UIButton)`
  padding: 0.8rem;
  width: 40%;
  color: ${({ theme }) => theme.colors.textPrimary};
  &:hover {
    background: ${({ theme }) => theme.colors.hoverButton};
  }
  ${({ theme }) => css`
    @media ${theme.devices.mobileL} {
      width: 80%;
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
    font-weight: 400;
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
    line-height: 1.8em;
    margin: 0;
    padding-right: 0.2rem;
  `}
`;
const DirectA = styled.a`
  ${({ theme }) => css`
    font-family: ${theme.fonts.secondary};
    color: ${theme.colors.backgroundActiveElem};
    font-size: ${theme.sizes.extraSmall}rem;
    text-align: center;
    line-height: 1.8em;
    &:hover {
      color: ${({ theme }) => theme.colors.hoverButton};
      cursor: pointer;
    }
  `}
`;
