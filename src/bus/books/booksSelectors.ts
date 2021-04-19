import { RootState } from '../../core/store';
import { IBook } from '../../utils/types/bookType';

export const booksSelector = (state: RootState): IBook[] => state.books.books;
export const loadingSelector = (state: RootState): boolean =>
  state.books.loading;
export const errorSelector = (state: RootState): string | null =>
  state.books.error;
