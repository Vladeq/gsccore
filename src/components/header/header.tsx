import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import styled from 'styled-components';

import { GscoreLogo } from '../../assets/svg-react/index';
import { hrefs } from '../../routes/client';

interface HeaderProps {
  headerRight?: ReactNode;
}

function Header({ headerRight }: HeaderProps): JSX.Element {
  const router = useRouter();
  return (
    <Heading>
      <GscoreLogo onClick={() => router.push(hrefs.home)} />
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
