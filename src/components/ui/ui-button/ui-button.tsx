import { ButtonHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

interface ButtonProps {
  color: string;
  className?: string;
  props: ButtonHTMLAttributes<HTMLButtonElement>;
}

function UIButton({ color, className, ...props }: ButtonProps): JSX.Element {
  return <Button className={className} $color={color} {...props} />;
}

const Button = styled.button<{ $color: string }>`
  ${({ $color, theme }) => css`
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
  `};
`;
export default UIButton;
