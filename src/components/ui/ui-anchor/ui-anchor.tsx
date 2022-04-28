import { AnchorHTMLAttributes } from 'react';
import styled, { css, CSSProp } from 'styled-components';

interface AnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  color: string;
  className?: string;
  rootCSS?: CSSProp;
}
function UiAnchor({
  color,
  className,
  rootCSS,
  ...anchorProps
}: AnchorProps): JSX.Element {
  return <A $color={color} className={className} $CSS={rootCSS} {...anchorProps} />;
}

const A = styled.a<{ $color: string; $CSS?: CSSProp }>`
  ${({ $color, $CSS, theme }) => css`
    font-family: ${theme.fonts.secondary};
    color: ${$color};
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
