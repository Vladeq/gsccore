import { useState } from 'react';
import { UseControllerReturn } from 'react-hook-form';
import styled, { css } from 'styled-components';

import { Check, Close } from '../../../assets/svg-react';
import { UIInput } from '../../ui/ui-input/index';

interface FormInputProps extends UseControllerReturn {
  placeholder: string;
}

function FormInput({ placeholder, ...fieldRender }: FormInputProps): JSX.Element {
  const [isFocused, setIsFocused] = useState(false);
  const hasError = fieldRender.fieldState.error;
  const isDirty = fieldRender.fieldState.isDirty;
  return (
    <Heading>
      <Wrapper $hasError={hasError} $isFocused={isFocused} $isDirty={isDirty}>
        <UIInput
          {...fieldRender.field}
          {...fieldRender.fieldState}
          placeholder={placeholder}
          onBlur={() => setIsFocused(false)}
          onFocus={() => setIsFocused(true)}
        />
        {isFocused && isDirty ? hasError ? <Close /> : <Check /> : null}
      </Wrapper>
      {hasError ? <ErrorText>{hasError.message}</ErrorText> : <ErrorText> </ErrorText>}
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
  ${({ theme, $hasError, $isDirty }) => css`
    border: 2px solid
      ${$hasError
        ? theme.colors.error
        : $isDirty
        ? theme.colors.valid
        : theme.colors.filled};
  `}
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
