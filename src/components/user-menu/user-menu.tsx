import Link from 'next/link';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { Frame, Gear, VectorDown, VectorUp } from '../../assets/svg-react/index';
import useToggle from '../../hooks/use-toggle';
import { hrefs } from '../../routes/client';
import { signOut } from '../../store/ducks/user/user-reducer';
import { UiAnchor } from '../ui/ui-anchor';

interface UserProps {
  user: string;
}
function UserMenu({ user }: UserProps): JSX.Element {
  // const [hide, setHide] = useState(false);
  const { isOpened, open, close, toggle } = useToggle();
  const dispatch = useDispatch();
  return (
    <Heading>
      <Item>
        <Link href={hrefs.subscriptions} passHref={true}>
          <A anchorType="secondary">My subscription</A>
        </Link>
      </Item>
      <Item>
        <A
          anchorType="secondary"
          onClick={() => {
            toggle((prevState) => !prevState);
          }}
        >
          {user}
        </A>
        {isOpened ? <VectorUp /> : <VectorDown />}
      </Item>
      {isOpened ? (
        <DropDown>
          <DropItem>
            <Gear />
            <Link href={hrefs.setPersonalInfo}>
              <A anchorType="secondary">Settings</A>
            </Link>
          </DropItem>
          <DropItem>
            <Frame />
            <Link href={hrefs.signin}>
              <A anchorType="secondary" onClick={() => dispatch(signOut())}>
                Log out
              </A>
            </Link>
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
