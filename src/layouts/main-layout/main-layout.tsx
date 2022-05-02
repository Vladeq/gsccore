import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { Footer } from '../../components/footer';
import { Header } from '../../components/header';
import { UserMenu } from '../../components/user-menu';
import { RootState } from '../../store/index';

interface LayoutProps {
  children: JSX.Element;
}
function MainLayout({ children }: LayoutProps): JSX.Element {
  const state = useSelector((state: RootState) => state.user);
  return (
    <Heading>
      <Header headerRight={!!state.username && <UserMenu user={state.username} />} />
      {children}
      <Footer />
    </Heading>
  );
}

const Heading = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.backgroundMain};
`;

export default MainLayout;
