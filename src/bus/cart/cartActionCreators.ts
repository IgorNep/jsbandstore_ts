import { Dispatch } from 'redux';
import { Action } from './cartActions';
import { CartItemProps } from './cartReducer';
import { CartTypes } from './cartTypes';

export const addBookToCart = (book: CartItemProps) => (
  dispatch: Dispatch<Action>,
) => {
  dispatch({ type: CartTypes.CART_ADD, payload: book });
};

export const clearCart = () => (dispatch: Dispatch<Action>) => {
  dispatch({ type: CartTypes.CART_CLEAR });
};
