import { ButtonHTMLAttributes, useContext } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import styled, { css, CSSProp, ThemeContext } from 'styled-components';

import { ButtonVariant } from '../../../types/button-types';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType: ButtonVariant;
  className?: string;
  isLoading: boolean;
  rootCSS?: CSSProp;
}

function UIButton({
  buttonType,
  className,
  isLoading,
  rootCSS,
  value,
  ...buttonProps
}: ButtonProps): JSX.Element {
  const theme = useContext(ThemeContext);

  return (
    <Button
      $buttonType={buttonType}
      className={className}
      $CSS={rootCSS}
      {...buttonProps}
    >
      {isLoading ? (
        <ClipLoader loading={true} size={20} color={theme.colors[buttonType].text} />
      ) : (
        value
      )}
    </Button>
  );
}
const Button = styled.button<{ $CSS?: CSSProp; $buttonType: string }>`
  ${({ $CSS, theme, $buttonType }) => css`
    background: ${theme.colors[$buttonType].initial};
    border: none;
    border-radius: 4px;
    font-size: ${theme.sizes.extraSmall}rem;
    font-weight: 700;
    line-height: 1rem;
    color: ${theme.colors[$buttonType].text};
    margin: 0;
    &:disabled {
      opacity: 0.6;
      box-shadow: 0px 10px 28px rgba(252, 88, 66, 0.2);
    }
    &:hover:enabled {
      background: ${theme.colors[$buttonType].hover};
      color: ${theme.colors[$buttonType].hoverText};
    }
    &:active:enabled {
      background: ${theme.colors[$buttonType].initial};
      color: ${theme.colors[$buttonType].text};
    }
    ${$CSS};
  `};
`;
export default UIButton;
