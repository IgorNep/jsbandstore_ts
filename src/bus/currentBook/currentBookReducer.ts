import { CurrentBookTypes } from './currentBookTypes';
import { Action } from './currentBookActions';
import { IBook } from '../../utils/types/bookType';

export type CurrentBookInitialStateType = {
  book: IBook | null;
  loading: boolean;
  error: string | null;
};
const initialState = {
  book: null,
  loading: false,
  error: null,
};

export const currentBookReducer = (
  state: CurrentBookInitialStateType = initialState,
  action: Action,
): CurrentBookInitialStateType => {
  switch (action.type) {
    case CurrentBookTypes.GET_BOOK_BY_ID_REQUEST:
      return {
        loading: true,
        book: null,
        error: null,
      };
    case CurrentBookTypes.GET_BOOK_BY_ID_SUCCESS:
      return {
        loading: false,
        book: action.payload,
        error: null,
      };
    case CurrentBookTypes.GET_BOOK_BY_ID_FAIL:
      return {
        loading: true,
        book: null,
        error: action.payload,
      };
    default:
      return state;
  }
};
