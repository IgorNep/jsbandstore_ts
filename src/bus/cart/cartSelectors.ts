import { RootState } from '../../core/store';
import { CartItemProps } from './cartReducer';

export const cartItemsSelector = (state: RootState): CartItemProps[] =>
  state.cart.cartItems;
