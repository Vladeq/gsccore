import { InputHTMLAttributes } from 'react';
import styled, { css, CSSProp } from 'styled-components';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  rootCSS?: CSSProp;
}
function UIInput({ className, rootCSS, ...inputProps }: InputProps): JSX.Element {
  return <Input className={className} $CSS={rootCSS} {...inputProps} />;
}

const Input = styled.input<{ $CSS?: CSSProp }>`
  ${({ $CSS }) => css`
    width: 80%;
    outline: none;
    border: none;
    ${$CSS};
  `};
`;
export default UIInput;
