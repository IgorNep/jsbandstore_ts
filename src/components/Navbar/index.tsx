import React from 'react';
import { NavLink } from 'react-router-dom';
import { UserInfoType } from '../../utils/types/userInfo';
import Button from '../common/Button';
import { StyledContainer } from '../styled/Container';
import { StyledFlex } from '../styled/Flex';
import styled from 'styled-components';

interface NavbarProps {
  bg?: string;
  userInfo?: UserInfoType;
  onLogoutClick: (event: React.MouseEvent) => void;
}

const StyledNavbar = styled.nav<NavbarProps>`
  width: 100%;
  padding: 2rem 0;
  background: ${({ bg }) => bg || 'transparent'};
`;

const StyledMenu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  max-width: 300px;
  width: 100%;
`;

const StyledImage = styled.img`
  src: url(${(props) => props.src});
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 1rem;
  border: 1px solid #fff;
`;

const StyledLi = styled.li`
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
`;
const authLinks = (
  <>
    <StyledLi>
      <NavLink to='/'>Home</NavLink>
    </StyledLi>
    <StyledLi>
      <NavLink to='/about'>About</NavLink>
    </StyledLi>
  </>
);
const guestLinks = (
  <>
    <StyledLi>
      <NavLink to='/login'>Login</NavLink>
    </StyledLi>
  </>
);

const Navbar: React.FC<NavbarProps> = (props: NavbarProps) => {
  return (
    <StyledNavbar {...props}>
      <StyledContainer>
        <StyledFlex>
          <div className='logo'></div>

          <StyledMenu {...props}>
            {props.userInfo ? (
              <>
                <StyledLi>{props.userInfo.username}</StyledLi>
                <StyledImage src={props.userInfo?.avatar} />
                {authLinks}
                <StyledLi {...props}>
                  <Button title='Logout' onClick={props.onLogoutClick} />
                </StyledLi>
              </>
            ) : (
              guestLinks
            )}
          </StyledMenu>
        </StyledFlex>
      </StyledContainer>
    </StyledNavbar>
  );
};

export default Navbar;
