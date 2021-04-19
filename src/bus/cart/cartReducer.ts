import { CartTypes } from './cartTypes';
import { Action } from './cartActions';

export interface CartItemProps {
  id: string;
  price: number;
  qty: number;
  title: string;
}
interface CartItemsInitialStateProps {
  cartItems: CartItemProps[];
}

const initialState = {
  cartItems: [],
};

export const cartReducer = (
  state: CartItemsInitialStateProps = initialState,
  action: Action,
): CartItemsInitialStateProps => {
  switch (action.type) {
    case CartTypes.CART_ADD:
      return {
        cartItems: [...state.cartItems, action.payload],
      };

    case CartTypes.CART_CLEAR:
      return initialState;
    default:
      return state;
  }
};
