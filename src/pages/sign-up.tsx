import Link from 'next/link';
import { useContext } from 'react';
import { Controller, UseControllerReturn, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import ClipLoader from 'react-spinners/ClipLoader';
import styled, { css, ThemeContext } from 'styled-components';

import { ErrorComp } from '../components/error-comp';
import { FormInput } from '../components/form-components/form-input';
import { patterns } from '../components/form-components/patterns';
import { HeadingH2 } from '../components/heading-h2';
import { UiAnchor } from '../components/ui/ui-anchor';
import { UIButton } from '../components/ui/ui-button';
import { MainLayout } from '../layouts/main-layout';
import { StagePointer } from '../page-components/sign/stage-pointer';
import { signUpAct } from '../store/ducks/user/user-actions';
import { RootState } from '../store/index';
import { SignUpDto } from '../types/api-types';

export default function SignUp(): JSX.Element {
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state.user);

  const { control, handleSubmit, formState } = useForm<SignUpDto>({
    defaultValues: { email: '', username: '', password: '' },
    mode: 'onChange',
  });

  const onSubmit = (data: SignUpDto) => {
    dispatch(signUpAct(data));
  };
  const theme = useContext(ThemeContext);
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
            name="username"
            rules={{ required: 'Name required' }}
            render={(fieldRender: UseControllerReturn) => (
              <FormInput {...fieldRender} placeholder={'Enter name'} />
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
              color={theme.colors.backgroundActiveElem}
              type="submit"
              disabled={!formState.isValid}
            >
              {state.isLoading ? (
                <ClipLoader loading={true} size={20} color={theme.colors.textPrimary} />
              ) : (
                <ButtonText>Send password</ButtonText>
              )}
            </StyledButton>
            {state.isError ? <ErrorComp err={state.error.message} /> : null}
          </InfoBlock>
        </Form>
        <DirectBlock>
          <DirectText>Have an account? </DirectText>
          <Link href="/sign-in">
            <UiAnchor color={theme.colors.backgroundActiveElem}>
              Go to the next step
            </UiAnchor>
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
const InfoBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;
const StyledButton = styled(UIButton)`
  padding: 0.8rem;
  width: 40%;
  color: ${({ theme }) => theme.colors.textPrimary};
  &:hover:enabled {
    background: ${({ theme }) => theme.colors.hoverButton};
  }
  &:active:enabled {
    background: ${({ theme }) => theme.colors.backgroundActiveElem};
  }
  ${({ theme }) => css`
    @media ${theme.devices.mobileL} {
      width: 80%;
    }
  `}
`;
const ButtonText = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.sizes.extraSmall}rem;
    color: ${theme.colors.textPrimary};
    font-weight: 700;
    line-height: 1rem;
    margin: 0;
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
