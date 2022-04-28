import { ButtonHTMLAttributes } from 'react';
import styled, { css, CSSProp } from 'styled-components';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color: string;
  className?: string;
  rootCSS?: CSSProp;
  children?: JSX.Element;
}

function UIButton({
  color,
  className,
  rootCSS,
  children,
  ...buttonProps
}: ButtonProps): JSX.Element {
  return (
    <Button $color={color} className={className} $CSS={rootCSS} {...buttonProps}>
      {children}
    </Button>
  );
}

const Button = styled.button<{ $color: string; $CSS?: CSSProp }>`
  ${({ $color, $CSS }) => css`
    background: ${$color};
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
