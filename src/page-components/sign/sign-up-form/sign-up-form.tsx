import { useRouter } from 'next/router';
import { Controller, UseControllerReturn, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import styled, { css } from 'styled-components';

import { ErrorComponent } from '../../../components/error-component';
import { FormInput } from '../../../components/form-components/form-input';
import { patterns } from '../../../components/form-components/patterns';
import { UIButton } from '../../../components/ui/ui-button';
import { hrefs } from '../../../routes/client';
import { RootState } from '../../../store';
import { signUpAct } from '../../../store/ducks/user/user-actions';
import { SignUpDto } from '../../../types/api-types';

function SignUpForm(): JSX.Element {
  const dispatch = useDispatch();
  const router = useRouter();
  const state = useSelector((state: RootState) => state.user);

  const { control, handleSubmit, formState } = useForm<SignUpDto>({
    defaultValues: { email: '', username: '', password: '' },
    mode: 'onChange',
  });

  const onSubmit = (data: SignUpDto) => {
    dispatch(signUpAct(data));
    if (!state.isError) {
      router.push(hrefs.signin);
    }
  };
  return (
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
          <FormInput {...fieldRender} type="password" placeholder={'Enter password'} />
        )}
      />

      <InfoBlock>
        <StyledButton
          buttonType="primary"
          type="submit"
          disabled={!formState.isValid}
          value="Sign up"
          isLoading={state.isLoading}
        />
        {!!state.isError && <ErrorComponent err={state.error.message} />}
      </InfoBlock>
    </Form>
  );
}
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
export default SignUpForm;
