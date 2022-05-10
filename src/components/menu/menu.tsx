import styled, { css } from 'styled-components';

import { MenuLine } from '../../assets/svg-react';
import useToggle from '../../hooks/use-toggle';
import { BurgerMenu } from '../burger-menu';
import { UserMenu } from '../user-menu';

interface MenuProps {
  user: string;
}

function Menu({ user }: MenuProps): JSX.Element {
  const { isOpened, toggle } = useToggle(false);
  return (
    <>
      <StyledUserMenu user={user} />
      <StyledMenuLine onClick={toggle} />
      <BurgerMenu isOpen={isOpened} user={user} setToggle={toggle} />
    </>
  );
}

const StyledUserMenu = styled(UserMenu)`
  ${({ theme }) => css`
    @media ${theme.devices.tablet} {
      display: none;
    }
  `}
`;
const StyledMenuLine = styled(MenuLine)`
  display: none;
  ${({ theme }) => css`
    @media ${theme.devices.tablet} {
      display: block;
    }
  `}
`;

export default Menu;
