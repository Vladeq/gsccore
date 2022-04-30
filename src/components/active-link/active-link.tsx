import Link from 'next/link';
import { useRouter } from 'next/router';
import styled, { css } from 'styled-components';

import { UIComponentsVariant } from '../../types/button-types';
import { UiAnchor } from '../ui/ui-anchor/index';

interface LinkProps {
  linkType: UIComponentsVariant;
  href: string;
  text: string;
}

function ActiveLink({ href, text, linkType }: LinkProps): JSX.Element {
  const router = useRouter();
  const isActive = router.asPath === href;
  return (
    <Heading $isActive={isActive} $linkType={linkType}>
      <Link href={href} passHref={true}>
        <UiAnchor anchorType="primary">{text}</UiAnchor>
      </Link>
    </Heading>
  );
}

const Heading = styled.div<{ $isActive: boolean; $linkType: string }>`
  ${({ $isActive, theme, $linkType }) => css`
    border-bottom: 2px solid
      ${$isActive ? theme.colors.active[$linkType] : theme.colors.inactive[$linkType]};
    padding: 1rem;
    height: 14px;
  `}
`;

export default ActiveLink;
