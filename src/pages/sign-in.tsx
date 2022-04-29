import Link from 'next/link';
import { useContext } from 'react';
import { Controller, UseControllerReturn, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import styled, { css, ThemeContext } from 'styled-components';

import { ErrorComponent } from '../components/error-component/index';
import { FormInput } from '../components/form-components/form-input';
import { patterns } from '../components/form-components/patterns';
import { HeadingH2 } from '../components/heading-h2';
import { UIButton } from '../components/ui/ui-button';
import { MainLayout } from '../layouts/main-layout';
import { StagePointer } from '../page-components/sign/stage-pointer';
import { RootState } from '../store';
import { signInAct } from '../store/ducks/user/user-actions';
import { SignInDto } from '../types/api-types';

export default function SignUp(): JSX.Element {
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state.user);

  const { control, handleSubmit, formState } = useForm<SignInDto>({
    defaultValues: { email: '', password: '' },
    mode: 'onChange',
  });

  const onSubmit = (data: SignInDto) => {
    dispatch(signInAct(data));
  };
  const theme = useContext(ThemeContext);

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
          <Controller
            control={control}
            name={'email'}
            rules={{
              pattern: {
                value: patterns.email,
                message: 'Must be email',
              },
            }}
            render={(fieldRender: UseControllerReturn) => (
              <FormInput {...fieldRender} placeholder={'Enter email'} />
            )}
          />
          <Controller
            control={control}
            name="password"
            rules={{
              minLength: {
                value: 6,
                message: 'Password must be longer than or equal to 6 characters',
              },
            }}
            render={(fieldRender: UseControllerReturn) => (
              <FormInput {...fieldRender} placeholder={'Enter password'} />
            )}
          />
          <InfoBlock>
            <StyledButton
              buttonType="primary"
              type="submit"
              disabled={!formState.isValid}
              value="Log in"
              isLoading={state.isLoading}
            />
            {state.isError ? <ErrorComponent err={state.error.message} /> : null}
          </InfoBlock>
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
const InfoBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
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
