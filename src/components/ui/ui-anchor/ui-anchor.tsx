import { useRouter } from 'next/router';
import { AnchorHTMLAttributes } from 'react';
import styled, { css, CSSProp } from 'styled-components';

import { UIComponentsVariant } from '../../../types/button-types';

interface AnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  anchorType: UIComponentsVariant;
  className?: string;
  rootCSS?: CSSProp;
}
function UiAnchor({
  anchorType,
  className,
  rootCSS,
  href,
  ...anchorProps
}: AnchorProps): JSX.Element {
  const router = useRouter();
  const isActive = router.asPath === href;
  return (
    <A
      $anchorType={anchorType}
      $isActive={isActive}
      className={className}
      $CSS={rootCSS}
      {...anchorProps}
    />
  );
}

const A = styled.a<{ $isActive: boolean; $CSS?: CSSProp; $anchorType: string }>`
  ${({ $isActive, $CSS, theme, $anchorType }) => css`
    font-family: ${theme.fonts.secondary};
    color: ${
      $isActive ? theme.colors.active[$anchorType] : theme.colors.inactive[$anchorType]
    }};
    font-size: ${theme.sizes.extraSmall}rem;
    text-align: center;
    line-height: 22px;
    &:hover {
      color: ${theme.colors.hoverButton};
      cursor: pointer;
    }
    ${$CSS};
  `};
`;

export default UiAnchor;
