import { Controller, UseControllerReturn, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import styled, { css } from 'styled-components';

import { ErrorComponent } from '../components/error-component/index';
import { FormInput } from '../components/form-components/form-input';
import { patterns } from '../components/form-components/patterns';
import { UIButton } from '../components/ui/ui-button';
import { MainLayout } from '../layouts/main-layout';
import { UserSettingsLayout } from '../layouts/user-settings-layout';
import { updatePersonalDataAct } from '../store/ducks/user/user-actions';
import { RootState } from '../store/index';
import { UpdatePersonalDataDto } from '../types/api-types';

export default function SetInfo(): JSX.Element {
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state.user);

  const { control, handleSubmit, formState } = useForm<UpdatePersonalDataDto>({
    defaultValues: { email: '', username: '' },
    mode: 'onChange',
  });

  const onSubmit = (data: UpdatePersonalDataDto) => {
    dispatch(updatePersonalDataAct(data));
  };
  return (
    <MainLayout>
      <UserSettingsLayout>
        <Heading>
          <Text>Personal info</Text>
          <Form onSubmit={handleSubmit(onSubmit)}>
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
