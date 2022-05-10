import styled, { css } from 'styled-components';

import { ActiveLink } from '../../components/active-link';
import { HeadingTitle } from '../../components/heading-title';
import { hrefs } from '../../routes/client';

interface UserSettingsProps {
  children: JSX.Element;
}

function UserSettingsLayout({ children }: UserSettingsProps): JSX.Element {
  return (
    <Heading>
      <TitleBlock>
        <HeadingTitle text="Settings" />
      </TitleBlock>
      <LinksBlock>
        <ActiveLink
          linkType="primary"
          href={hrefs.setPersonalInfo}
          text="Personal info"
        />
        <ActiveLink linkType="primary" href={hrefs.setPassword} text="Change password" />
      </LinksBlock>
      {children}
    </Heading>
  );
}

const Heading = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: ${({ theme }) => theme.colors.backgroundMain};
`;
const TitleBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 2rem 1rem 2rem;
`;
const LinksBlock = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    border-bottom: 2px solid ${theme.colors.neutral};
    margin: 0 2rem 0 2rem;
    height: 50px;
  `}
`;

export default UserSettingsLayout;
