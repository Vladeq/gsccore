import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { Logo } from '../../assets/svg-react/index';
import { RootState } from '../../store/index';
import { UserMenu } from '../user-menu/index';

function Header(): JSX.Element {
  const state = useSelector((state: RootState) => state.user);
  return (
    <Heading>
      <Logo />
      {state.username ? <UserMenu user={state.username} /> : null}
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
