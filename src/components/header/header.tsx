import { ReactNode } from 'react';
import styled from 'styled-components';

import { Logo } from '../../assets/svg-react/index';

interface HeaderProps {
  headerRight?: ReactNode;
}

function Header({ headerRight }: HeaderProps): JSX.Element {
  return (
    <Heading>
      <Logo />
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
  padding: 40px;
`;

export default Header;
