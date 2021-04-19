import { Action } from './booksActions';
import { ActionTypes } from './booksTypes';
import { IBook } from '../../utils/types/bookType';

export type BooksInitialStateType = {
  loading: boolean;
  books: IBook[];
  error: string | null;
};

const initialState = {
  loading: false,
  books: [],
  error: null,
};

export const booksReducer = (
  state: BooksInitialStateType = initialState,
  action: Action,
): BooksInitialStateType => {
  switch (action.type) {
    case ActionTypes.GET_BOOKS_REQUEST:
      return {
        loading: true,
        books: [],
        error: null,
      };
    case ActionTypes.GET_BOOKS_SUCCESS:
      return {
        loading: false,
        books: action.payload,
        error: null,
      };
    case ActionTypes.GET_BOOKS_FAIL:
      return {
        loading: false,
        books: [],
        error: action.payload,
      };

    default:
      return state;
  }
};
