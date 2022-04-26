import { ButtonHTMLAttributes } from 'react';
import styled, { css, CSSProp } from 'styled-components';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color: string;
  className?: string;
  rootCSS?: CSSProp;
}

function UIButton({
  color,
  className,
  type,
  disabled,
  value,
  rootCSS,
}: ButtonProps): JSX.Element {
  return (
    <Button
      className={className}
      $color={color}
      disabled={disabled}
      type={type}
      value={value}
      $CSS={rootCSS}
    >
      {value}
    </Button>
  );
}

const Button = styled.button<{ $color: string; $CSS?: CSSProp }>`
  ${({ $color, theme, $CSS }) => css`
    background: ${$color};
    font-size: ${theme.sizes.extraSmall}rem;
    font-weight: 700;
    line-height: 1rem;
    border: none;
    border-radius: 4px;
    &:disabled {
      opacity: 0.6;
      box-shadow: 0px 10px 28px rgba(252, 88, 66, 0.2);
    }
    ${$CSS};
  `};
`;
export default UIButton;
