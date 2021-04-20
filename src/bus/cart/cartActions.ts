import { CartTypes } from './cartTypes';
import { CartItemProps } from './cartReducer';

interface CartItemsAddAction {
  type: CartTypes.CART_ADD;
  payload: CartItemProps;
}

interface CartItemsClearAction {
  type: CartTypes.CART_CLEAR;
}

interface CartItemDeleteAction {
  type: CartTypes.CART_ITEM_DELETE;
  payload: string | number;
}

export type Action =
  | CartItemsAddAction
  | CartItemsClearAction
  | CartItemDeleteAction;
