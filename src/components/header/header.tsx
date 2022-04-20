import styled from 'styled-components';

import { Logo } from '../logo/index';

interface HeaderProps {
  headerLeft?: JSX.Element;
}
function Header({ headerLeft }: HeaderProps): JSX.Element {
  return (
    <Heading>
      <Logo />
      {headerLeft}
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
