import styled from 'styled-components';

import { Footer } from '../../components/footer';
import { Header } from '../../components/header';

interface LayoutProps {
  children: JSX.Element;
}
function MainLayout({ children }: LayoutProps): JSX.Element {
  return (
    <Heading>
      <Header />
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
