import Link from 'next/link';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import styled, { css } from 'styled-components';

import {
  GreyFrame,
  GreyGear,
  VectorDown,
  VectorUp,
  WhiteClose,
} from '../../assets/svg-react/index';
import { GscoreLogo } from '../../assets/svg-react/index';
import useToggle from '../../hooks/use-toggle';
import { hrefs } from '../../routes/client';
import { signOut } from '../../store/ducks/user/user-reducer';
import { UiAnchor } from '../ui/ui-anchor';

interface BurgerProps {
  isOpen: boolean;
  user: string;
  setToggle: () => void;
}

function BurgerMenu({ isOpen, user, setToggle }: BurgerProps): JSX.Element {
  const { isOpened, toggle } = useToggle(false);
  const dispatch = useDispatch();
  const signOutHandler = useCallback(() => {
    dispatch(signOut());
  }, []);
  return (
    <Heading $isOpen={isOpen}>
      <UpSide>
        <WhiteClose onClick={setToggle} />
        <GscoreLogo />
      </UpSide>
      <Menu>
        <Item>
          <Link href={hrefs.subscriptions} passHref={true}>
            <A anchorType="secondary">My subscription</A>
          </Link>
        </Item>
        <Drop>
          <UserItem>
            <A anchorType="secondary" onClick={toggle}>
              {user}
            </A>
            {isOpened ? <VectorUp /> : <VectorDown />}
          </UserItem>
          {isOpened ? (
            <DropDown>
              <DropItem>
                <GreyGear />
                <Link href={hrefs.setPersonalInfo}>
                  <A anchorType="burger">Settings</A>
                </Link>
              </DropItem>
              <DropItem>
                <GreyFrame />
                <Link href={hrefs.signin}>
                  <A anchorType="burger" onClick={signOutHandler}>
                    Log out
                  </A>
                </Link>
              </DropItem>
            </DropDown>
          ) : null}
        </Drop>
      </Menu>
    </Heading>
  );
}

const Heading = styled.div<{ $isOpen: boolean }>`
  ${({ theme, $isOpen }) => css`
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    z-index: 293;
    display: none;
    width: 70%;
    margin-top: 0px;
    padding-right: 0px;
    align-items: stretch;
    background-color: ${theme.colors.backgroundBlock};
    transform: translateX(100%);
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    ${$isOpen &&
    css`
      display: block;
      transform: translateX(0);
    `}
  `}
`;
const UpSide = styled.div`
  position: relative;
  top: 3%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
const Menu = styled.div`
  display: flex;
  margin-top: 3rem;
  flex-direction: column;
`;
const Item = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0 2rem 0 2rem;
    padding: 1rem 0 1rem 0;
    border-bottom: 2px solid ${theme.colors.neutral};
  `}
`;
const UserItem = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `}
`;
const Drop = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    margin: 0 2rem 0 2rem;
    padding: 1rem 0 1rem 0;
    border-bottom: 2px solid ${theme.colors.neutral};
  `}
`;
const A = styled(UiAnchor)`
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  padding-left: 0.5rem;
`;
const DropItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1rem 0 1rem 0;
`;
const DropDown = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`;
export default BurgerMenu;
