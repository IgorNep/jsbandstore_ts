import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cartItemsSelector } from '../../bus/cart/cartSelectors';
import { userLogout } from '../../bus/userLogin/userLoginActionCreators';
import { userInfoSelector } from '../../bus/userLogin/userLoginSelectors';
import Navbar from '../../components/Navbar';

interface NavbarContainerProps {
  onLogoutClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const NavbarContainer: React.FC<NavbarContainerProps> = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector(userInfoSelector);
  const logoutHandler = () => {
    dispatch(userLogout());
  };
  const cartItems = useSelector(cartItemsSelector);

  return (
    <>
      <Navbar
        onLogoutClick={logoutHandler}
        bg='lightblue'
        userInfo={userInfo || null || undefined}
        cartItems={cartItems}
      />
    </>
  );
};

export default NavbarContainer;
