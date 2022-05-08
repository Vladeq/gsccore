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
  onChange,
  ...checkboxProps
}: CheckboxProps): JSX.Element {
  return (
    <Heading className={className} $CSS={rootCSS}>
      <HiddenCheckbox
        type="checkbox"
        checked={checked}
        onChange={onChange}
        {...checkboxProps}
      />
      <Checkbox $checked={checked} />
    </Heading>
  );
}

const Heading = styled.div<{ $CSS?: CSSProp }>`
  ${({ $CSS, theme }) => css`
    display: inline-block;
    vertical-align: middle;
    ${$CSS};
  `}
`;
const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;
const Checkbox = styled.div<{ $checked?: boolean }>`
  ${({ theme, $checked }) => css`
    display: inline-block;
    width: 24px;
    height: 24px;
    background: ${$checked
      ? theme.colors.backgroundActiveElem
      : theme.colors.textPrimary};
    border-radius: 8px;
    transition: all 150ms;
  `};
`;

export default UICheckbox;
