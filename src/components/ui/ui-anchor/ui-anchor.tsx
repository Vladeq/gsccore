import { useRouter } from 'next/router';
import { AnchorHTMLAttributes, forwardRef, ForwardRefRenderFunction } from 'react';
import styled, { css, CSSProp } from 'styled-components';

import { UIComponentsVariant } from '../../../types/button-types';

interface AnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  anchorType: UIComponentsVariant;
  className?: string;
  rootCSS?: CSSProp;
}

const UiAnchor: ForwardRefRenderFunction<HTMLAnchorElement, AnchorProps> = (
  { anchorType, className, rootCSS, href, ...anchorProps },
  ref,
) => {
  const router = useRouter();
  const isActive = router.asPath === href;
  return (
    <A
      $anchorType={anchorType}
      $isActive={isActive}
      className={className}
      $CSS={rootCSS}
      {...anchorProps}
      ref={ref}
    />
  );
};

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

export default forwardRef<HTMLAnchorElement, AnchorProps>(UiAnchor);
