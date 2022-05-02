import Link from 'next/link';
import styled, { css, CSSProp } from 'styled-components';

interface PointerProps {
  className?: string;
  isActive: boolean;
  href: string;
  text: string;
  rootCSS?: CSSProp;
}
function StagePointer({
  text,
  isActive,
  href,
  className,
  rootCSS,
}: PointerProps): JSX.Element {
  return (
    <Heading className={className} $CSS={rootCSS}>
      <Link href={href}>
        <Text $isActive={isActive}>{text}</Text>
      </Link>
    </Heading>
  );
}

const Heading = styled.div<{ $CSS?: CSSProp }>`
  ${({ $CSS }) => css`
    ${$CSS};
  `};
`;

const Text = styled.a<{ $isActive: boolean }>`
  ${({ theme, $isActive }) => css`
    color: ${theme.colors.textPrimary};
    font-size: ${theme.sizes.small}rem;
    font-weight: 500;
    line-height: 1.2rem;
    &:hover {
      color: ${theme.colors.backgroundActiveElem};
      cursor: pointer;
    }
    &::after {
      content: '';
      margin-top: 0.5rem;
      display: block;
      border-radius: 8px;
      background: ${$isActive ? theme.colors.backgroundActiveElem : theme.colors.neutral};
      width: 100%;
      height: 8px;
    }
  `}
`;

export default StagePointer;
