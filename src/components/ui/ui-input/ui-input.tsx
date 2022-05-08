import { forwardRef, ForwardRefRenderFunction, InputHTMLAttributes } from 'react';
import styled, { css, CSSProp } from 'styled-components';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  rootCSS?: CSSProp;
}

const UIInput: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { className, rootCSS, ...inputProps },
  ref,
) => {
  return <Input className={className} $CSS={rootCSS} {...inputProps} ref={ref} />;
};

const Input = styled.input<{ $CSS?: CSSProp }>`
  ${({ $CSS }) => css`
    width: 80%;
    outline: none;
    border: none;
    ${$CSS};
  `};
`;
export default forwardRef<HTMLInputElement, InputProps>(UIInput);
