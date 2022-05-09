import { useSelector } from 'react-redux';
import styled, { css } from 'styled-components';

import { Footer } from '../../components/footer';
import { Header } from '../../components/header';
import { Menu } from '../../components/menu';
import { RootState } from '../../store/index';

interface LayoutProps {
  children: JSX.Element;
}
function MainLayout({ children }: LayoutProps): JSX.Element {
  const state = useSelector((state: RootState) => state.user);
  return (
    <Heading>
      <Header headerRight={!!state.username && <Menu user={state.username} />} />
      {children}
      <Footer />
    </Heading>
  );
}

const Heading = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    z-index: 0;
    background: ${theme.colors.backgroundMain};
  `}
`;

export default MainLayout;
