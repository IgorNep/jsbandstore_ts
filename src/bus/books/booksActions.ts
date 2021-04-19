import { ActionTypes } from './booksTypes';

interface BooksGetRequestAction {
  type: ActionTypes.GET_BOOKS_REQUEST;
}

interface BooksGetSuccessAction {
  type: ActionTypes.GET_BOOKS_SUCCESS;
  payload: any;
}
interface BooksGetFailAction {
  type: ActionTypes.GET_BOOKS_FAIL;
  payload: string;
}

export type Action =
  | BooksGetRequestAction
  | BooksGetFailAction
  | BooksGetSuccessAction;
