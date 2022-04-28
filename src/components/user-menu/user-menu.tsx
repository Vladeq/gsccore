import Link from 'next/link';
import { useContext, useState } from 'react';
import styled, { css, ThemeContext } from 'styled-components';

import { Frame, Gear, VectorDown, VectorUp } from '../../assets/svg-react/index';
import { UiAnchor } from '../ui/ui-anchor';

interface UserProps {
  user: string;
}
function UserMenu({ user }: UserProps): JSX.Element {
  const theme = useContext(ThemeContext);
  const [hide, setHide] = useState(false);
  return (
    <Heading>
      <Item>
        <Link href="/">
          <A color={theme.colors.textPrimary}>My subscription</A>
        </Link>
      </Item>
      <Item>
        <A
          color={theme.colors.textPrimary}
          onClick={() => {
            setHide(!hide);
          }}
        >
          {user}
        </A>
        {hide ? <VectorUp /> : <VectorDown />}
      </Item>
      {hide ? (
        <DropDown>
          <DropItem>
            <Gear />
            <A color={theme.colors.textPrimary}>Settings</A>
          </DropItem>
          <DropItem>
            <Frame />
            <A color={theme.colors.textPrimary}>Log out</A>
          </DropItem>
        </DropDown>
      ) : null}
    </Heading>
  );
}

const Heading = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Item = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const DropItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1rem;
`;
const DropDown = styled.div`
  position: absolute;
  top: 5rem;
  right: 2rem;
  background: ${({ theme }) => theme.colors.backgroundBlock};
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 4px;
`;
const A = styled(UiAnchor)`
  padding: 0 0.4rem 0 0.4rem;
`;

export default UserMenu;
