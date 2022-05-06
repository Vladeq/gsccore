import { InputHTMLAttributes } from 'react';
import styled, { css, CSSProp } from 'styled-components';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  rootCSS?: CSSProp;
}

function UICheckbox({
  className,
  rootCSS,
  type,
  checked,
  ...checkboxProps
}: CheckboxProps): JSX.Element {
  return (
    <Checkbox
      className={className}
      $CSS={rootCSS}
      type="checkbox"
      checked={checked}
      {...checkboxProps}
    />
  );
}

const Checkbox = styled.input<{ $CSS?: CSSProp }>`
  ${({ $CSS, theme }) => css`
    width: 24px;
    height: 24px;
    ${$CSS};
  `};
`;

export default UICheckbox;
