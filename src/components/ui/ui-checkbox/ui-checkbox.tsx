import { InputHTMLAttributes, useState } from 'react';
import styled, { css, CSSProp } from 'styled-components';

import { Checkbox } from '../../../assets/svg-react';

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
  const [isFocus, setFocus] = useState(false);
  return (
    <Heading className={className} $CSS={rootCSS}>
      <HiddenCheckbox
        type="checkbox"
        checked={checked}
        onChange={onChange}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        {...checkboxProps}
      />
      <CheckboxBlock $checked={checked} $focus={isFocus}>
        <Icon $checked={checked} viewBox="-5 0 24 18" />
      </CheckboxBlock>
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
const CheckboxBlock = styled.div<{ $checked?: boolean; $focus?: boolean }>`
  ${({ theme, $checked, $focus }) => css`
    display: inline-block;
    width: 24px;
    height: 24px;
    background: ${$checked
      ? theme.colors.backgroundActiveElem
      : theme.colors.textPrimary};
    border-radius: 7px;
    transition: all 150ms;
    outline: ${$focus
      ? `4px solid ${$checked ? theme.colors.hoverButton : theme.colors.textSecondary}`
      : null};
    &:hover {
      background: ${$checked ? theme.colors.hoverButton : theme.colors.textSecondary};
    }
  `};
`;
const Icon = styled(Checkbox)<{ $checked?: boolean }>`
  ${({ theme, $checked }) => css`
    visibility: ${$checked ? 'visible' : 'hidden'};
  `}
`;
export default UICheckbox;
