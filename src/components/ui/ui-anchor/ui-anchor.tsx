import { AnchorHTMLAttributes } from 'react';
import styled, { css, CSSProp } from 'styled-components';

interface AnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  isActive: boolean;
  className?: string;
  rootCSS?: CSSProp;
}
function UiAnchor({
  isActive,
  className,
  rootCSS,
  ...anchorProps
}: AnchorProps): JSX.Element {
  return <A $isActive={isActive} className={className} $CSS={rootCSS} {...anchorProps} />;
}

const A = styled.a<{ $isActive: boolean; $CSS?: CSSProp }>`
  ${({ $isActive, $CSS, theme }) => css`
    font-family: ${theme.fonts.secondary};
    color: ${
      $isActive ? theme.colors.active.background : theme.colors.inactive.background
    }};
    font-size: ${theme.sizes.extraSmall}rem;
    text-align: center;
    line-height: 22px;
    &:hover {
      color: ${({ theme }) => theme.colors.hoverButton};
      cursor: pointer;
    }
    ${$CSS};
  `};
`;

export default UiAnchor;
