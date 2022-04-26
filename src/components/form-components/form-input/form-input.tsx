import { useState } from 'react';
import { ControllerFieldState } from 'react-hook-form';
import styled, { css } from 'styled-components';

import { Check, Close } from '../../../assets/svg-react';
import { UIInput } from '../../ui/ui-input/index';

interface FormInputProps extends ControllerFieldState {
  onChange: (value: any) => void;
  onBlur: () => void;
  value: string;
  name: string;
  ref?: any;
  placeholder: string;
}

function FormInput({
  onChange,
  onBlur,
  value,
  name,
  placeholder,
  isTouched,
  isDirty,
  error,
}: FormInputProps): JSX.Element {
  const [isFocused, setIsFocused] = useState(false);
  const hasError = error;
  return (
    <Heading>
      <Wrapper $hasError={hasError} $isFocused={isFocused} $isDirty={isDirty}>
        <UIInput
          onChange={onChange}
          placeholder={placeholder}
          value={value}
          name={name}
          onBlur={() => setIsFocused(false)}
          onFocus={() => setIsFocused(true)}
        />
        {isFocused && isDirty ? hasError ? <Close /> : <Check /> : null}
      </Wrapper>
      {hasError ? <ErrorText>{error.message}</ErrorText> : <ErrorText> </ErrorText>}
    </Heading>
  );
}
const Heading = styled.div`
  width: 100%;
  padding-bottom: 2rem;
`;
const Wrapper = styled.div<{
  $hasError: boolean;
  $isFocused: boolean;
  $isDirty: boolean;
}>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: white;
  padding: 1rem 0.5rem 1rem 0.5rem;
  border-radius: 6px;
  ${({ $hasError, $isDirty, theme }) => {
    if ($hasError) {
      return css`
        border: 2px solid ${theme.colors.error};
      `;
    } else if ($isDirty) {
      return css`
        border: 2px solid ${theme.colors.valid};
      `;
    } else {
      return css`
        border: 2px solid ${theme.colors.filed};
      `;
    }
  }}
`;
const ErrorText = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.error};
    font-size: ${theme.sizes.extraSmall}rem;
    font-weight: 400;
    line-height: 0.5rem;
  `}
`;

export default FormInput;
