import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteItemFromCart } from '../../bus/cart/cartActionCreators';
import { cartItemsSelector } from '../../bus/cart/cartSelectors';
import Cart from '../../components/Cart';

const CartContainer = () => {
  const cartItems = useSelector(cartItemsSelector);
  const dispatch = useDispatch();
  const onDeleteClick = (id: string) => {
    dispatch(deleteItemFromCart(id));
  };
  return (
    <>
      <Cart cartItems={cartItems} onDeleteClick={onDeleteClick} />
    </>
  );
};

export default CartContainer;
