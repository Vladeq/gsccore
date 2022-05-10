import Link from 'next/link';
import { ReactNode } from 'react';
import styled from 'styled-components';

import { GscoreLogo } from '../../assets/svg-react/index';
import { hrefs } from '../../routes/client';

interface HeaderProps {
  headerRight?: ReactNode;
}

function Header({ headerRight }: HeaderProps): JSX.Element {
  return (
    <Heading>
      <Link href={hrefs.home}>
        <GscoreLogo />
      </Link>
      {headerRight}
    </Heading>
  );
}

const Heading = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.colors.backgroundMain};
  padding: 2rem;
  max-width: 100%;
`;

export default Header;
