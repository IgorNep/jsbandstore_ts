import React from 'react';
import { UserInfoType } from '../../utils/types/userInfo';
import Button from '../common/Button';
import { StyledContainer } from '../styled/Container';
import { StyledFlex } from '../styled/Flex';
import { guestLinks, authLinks } from './NavLinks';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { CartItemProps } from '../../bus/cart/cartReducer';

interface NavbarProps {
  bg?: string;
  userInfo?: UserInfoType;
  cartItems: CartItemProps[];
  onLogoutClick: (event: React.MouseEvent) => void;
}

const StyledNavbar = styled.nav<NavbarProps>`
  width: 100%;
  padding: 2rem 0;
  background: ${({ bg }) => bg || 'transparent'};

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    max-width: 400px;
    width: 100%;
  }

  img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 1rem;
    border: 1px solid #fff;
  }
  li {
    margin-right: 0.5rem;
    a {
      text-decoration: none;
      padding: 0.3rem;
      border: 1px solid transparent;
      transition: border-bottom 0.3s ease;
      &:hover {
        border-bottom: 1px solid ${(props) => props.theme.color.link};
        opacity: 0.8;
      }
      &:active {
        color: ${(props) => props.theme.color.link};
      }
    }
  }
`;

const Navbar: React.FC<NavbarProps> = (props: NavbarProps) => {
  const totalItemsCount = props.cartItems.reduce((acc, item) => {
    return acc + item.qty;
  }, 0);

  return (
    <StyledNavbar {...props}>
      <StyledContainer>
        <StyledFlex>
          <div className='logo'></div>

          <ul {...props}>
            {props.userInfo ? (
              <>
                <li>{props.userInfo.username}</li>
                <img src={props.userInfo?.avatar} alt='avatar' />
                {authLinks}
                <li {...props}>
                  <Button title='Logout' onClick={props.onLogoutClick} />
                </li>
              </>
            ) : (
              <>{guestLinks}</>
            )}
            <li>
              <NavLink to='/cart'>Cart </NavLink>
              {totalItemsCount}
            </li>
          </ul>
        </StyledFlex>
      </StyledContainer>
    </StyledNavbar>
  );
};

export default Navbar;
