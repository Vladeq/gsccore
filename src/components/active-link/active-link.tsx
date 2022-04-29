import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import styled, { css, ThemeContext } from 'styled-components';

import { UiAnchor } from '../ui/ui-anchor/index';

interface LinkProps {
  href: string;
  text: string;
}

function ActiveLink({ href, text }: LinkProps): JSX.Element {
  const router = useRouter();
  const theme = useContext(ThemeContext);
  const color =
    router.asPath == href ? theme.colors.backgroundActiveElem : theme.colors.neutral;
  return (
    <Heading $color={color}>
      <Link href={href}>
        <UiAnchor color={color}>{text}</UiAnchor>
      </Link>
    </Heading>
  );
}

const Heading = styled.div<{ $color: string }>`
  ${({ $color }) => css`
    border-bottom: 2px solid ${$color};
    padding: 1rem;
    height: 14px;
  `}
`;

export default ActiveLink;
