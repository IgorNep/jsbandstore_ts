import { BooksInitialStateType } from '../../bus/books/booksReducer';
import { UserLoginInitialStateType } from '../../bus/userLogin/userLoginReducer';
export type StateType = {
  books: BooksInitialStateType;
  userLogin: UserLoginInitialStateType;
};
