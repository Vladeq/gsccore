import { Controller, UseControllerReturn, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import styled, { css, ThemeContext } from 'styled-components';

import { ErrorComponent } from '../components/error-component/index';
import { FormInput } from '../components/form-components/form-input';
import { UIButton } from '../components/ui/ui-button';
import { MainLayout } from '../layouts/main-layout';
import { UserSettingsLayout } from '../layouts/user-settings-layout';
import { updatePasswordAct } from '../store/ducks/user/user-actions';
import { RootState } from '../store/index';
import { UpdatePasswordDto } from '../types/api-types';

export default function SetInfo(): JSX.Element {
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state.user);

  const { control, handleSubmit, formState } = useForm<UpdatePasswordDto>({
    defaultValues: { currentPassword: '', newPassword: '' },
    mode: 'onChange',
  });

  const onSubmit = (data: UpdatePasswordDto) => {
    dispatch(updatePasswordAct(data));
  };
  return (
    <MainLayout>
      <UserSettingsLayout>
        <Heading>
          <Text>Change password</Text>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              control={control}
              name="currentPassword"
              rules={{
                minLength: {
                  value: 6,
                  message: 'Password must be longer than or equal to 6 characters',
                },
              }}
              render={(fieldRender: UseControllerReturn) => (
                <FormInput {...fieldRender} placeholder={'Enter current password'} />
              )}
            />
            <Controller
              control={control}
              name="newPassword"
              rules={{
                minLength: {
                  value: 6,
                  message: 'Password must be longer than or equal to 6 characters',
                },
              }}
              render={(fieldRender: UseControllerReturn) => (
                <FormInput {...fieldRender} placeholder={'Enter new password'} />
              )}
            />
            <InfoBlock>
              <StyledButton
                buttonType="primary"
                type="submit"
                disabled={!formState.isValid}
                value="Save"
                isLoading={state.isLoading}
              />
              {!!state.isError && <ErrorComponent err={state.error.message} />}
            </InfoBlock>
          </Form>
        </Heading>
      </UserSettingsLayout>
    </MainLayout>
  );
}
const Heading = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: ${({ theme }) => theme.colors.backgroundMain};
  margin: 2rem 2rem 1rem 2rem;
`;

const Text = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.textPrimary};
    font-size: ${theme.sizes.medium}rem;
    font-weight: 700;
    line-height: 40px;
    margin: 1rem 0 1rem 0;
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
