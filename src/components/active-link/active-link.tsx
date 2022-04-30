import Link from 'next/link';
import { useRouter } from 'next/router';
import styled, { css } from 'styled-components';

import { UiAnchor } from '../ui/ui-anchor/index';

interface LinkProps {
  href: string;
  text: string;
}

function ActiveLink({ href, text }: LinkProps): JSX.Element {
  const router = useRouter();
  const isActive = router.asPath === href;
  return (
    <Heading $isActive={isActive}>
      <Link href={href} passHref={true}>
        <UiAnchor isActive={isActive}>{text}</UiAnchor>
      </Link>
    </Heading>
  );
}

const Heading = styled.div<{ $isActive: boolean }>`
  ${({ $isActive, theme }) => css`
    border-bottom: 2px solid
      ${$isActive ? theme.colors.active.background : theme.colors.inactive.background};
    padding: 1rem;
    height: 14px;
  `}
`;

export default ActiveLink;
