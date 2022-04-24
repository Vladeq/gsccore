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
    defaultValues: { email: '', password: '' },
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
          <Pointer color={theme.colors.backgroundActiveElem} text="Login" />
          <Pointer color={theme.colors.neutral} text="Checkout" />
        </Pointers>
        <TitleBlock>
          <HeadingH2 text="Log in" />
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
            placeholder="Enter password"
            name="password"
            rules={{ validate: required }}
          />
          <StyledButton
            color={theme.colors.backgroundActiveElem}
            type="submit"
            disabled={!formState.isValid}
          >
            Log in
          </StyledButton>
        </Form>
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
