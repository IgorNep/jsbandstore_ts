import { CartTypes } from './cartTypes';
import { Action } from './cartActions';

export interface CartItemProps {
  id: string;
  price: number;
  qty: number;
  title: string;
}
export interface CartItemsInitialStateProps {
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
      const existItem = state.cartItems.find(
        (item) => item.id === action.payload.id,
      );
      if (existItem) {
        return {
          cartItems:
            state.cartItems.length > 0
              ? state.cartItems.map((item) =>
                  item.id === action.payload.id ? action.payload : item,
                )
              : [...state.cartItems, action.payload],
        };
      } else {
        return {
          cartItems: [...state.cartItems, action.payload],
        };
      }
    case CartTypes.CART_ITEM_DELETE:
      return {
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };
    case CartTypes.CART_CLEAR:
      return initialState;
    default:
      return state;
  }
};
