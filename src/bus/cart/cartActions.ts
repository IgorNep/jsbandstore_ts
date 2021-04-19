import { CartTypes } from './cartTypes';
import { CartItemProps } from './cartReducer';

interface CartItemsAddAction {
  type: CartTypes.CART_ADD;
  payload: CartItemProps;
}

interface CartItemsClearAction {
  type: CartTypes.CART_CLEAR;
}

export type Action = CartItemsAddAction | CartItemsClearAction;
